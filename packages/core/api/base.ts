// ! MOCK

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

const __MOCK_MODE_LOCAL_KEY = 'mock-mode';

if (typeof window !== 'undefined' && !IS_PRODUCTION) {
  window.MEGA_API_SET_MOCK = (value: boolean) => {
    localStorage.setItem(__MOCK_MODE_LOCAL_KEY, `${value}`);
    console.log('API MOCKING이 재설정되었습니다. 새로고침을 통해 변경사항을 적용해주세요.');
  };
}

// 로컬 스토리지에서 값을 가져옵니다. 없는 경우에는 false를 기본값으로 설정합니다.
const __MOCK_MODE_LOCAL =
  typeof window !== 'undefined' && !IS_PRODUCTION
    ? localStorage.getItem(__MOCK_MODE_LOCAL_KEY)
    : `${false}`; // ! SSR의 경우, 초기 로딩 시에는 해당 값이 browser에서 읽히지 않음으로 이 값을 조정하여 SSR의 경우에도 MOCK-MODE의 초기 설정을 변경합니다.

const MOCKING_MODE = __MOCK_MODE_LOCAL === 'true'; // Local Storage's value was stored 'string'

// 로컬스토리지에 값이 없는 경우에는 기본값으로 로컬스토리지를 초기화합니다.
if (__MOCK_MODE_LOCAL === null && !IS_PRODUCTION)
  localStorage.setItem(__MOCK_MODE_LOCAL_KEY, 'false');

//#region

// type APIResponse<TData = unknown> = TData; // or { data: TData }

// const unwrapResponse = async (response: Response) => {
//   const json = (await response.json()) as APIResponse;
//   // eslint-disable-next-line
//   return json as any;
// };

//#endregion

//#region Fetcher

type FetcherFunction = (...args: Parameters<typeof fetch>) => Promise<Response | undefined>;

type FetchOption = Parameters<FetcherFunction>[1];

const fetcherMethods = ['GET', 'PUT', 'POST', 'DELETE', 'MOCK'] as const;

type FetchMethod = (typeof fetcherMethods)[number];

const fetchErrorHandler = (err: MegabrainAPIError) => {
  throw err;
};

export const fetcher = fetcherMethods.reduce((_fetcher, item) => {
  _fetcher[item] = async (...args) => {
    try {
      return await fetch(args[0], {
        method: item,
        ...args[1],
      });
    } catch (err) {
      fetchErrorHandler(MegabrainAPIError.of(item, 'Fail to Fetch', args));
    }
  };
  return _fetcher;
}, {} as Record<FetchMethod, FetcherFunction>);

//#endregion

//#region Endpoint

export interface EndpointOption<TPayload, TResult> {
  request?: (payload: TPayload) => FetchOption;
  mock?: (payload: TPayload) => Promise<TResult>;
  successOnly?: boolean;
  /** Mock Function을 새로 이용하지 않고 기본값으로 사용합니다 */
  mirror?: boolean;
}

export type Endpoint<TPayload = unknown, TResult = unknown> = ((
  payload: TPayload
) => Promise<TResult>) & {
  compute(payload: TPayload): string;
};

const createMockFetcher = <TMock = unknown>(mock?: TMock) => {
  if (typeof mock === 'function') {
    return mock;
  } else {
    throw MegabrainAPIError.of(
      'MOCK',
      'option.mock 함수가 비어있는 경우 [MOCK-MODE]를 사용할 수 없습니다.'
    );
  }
};

export const createEndpoint = <TResult = unknown, TPayload = void>(
  method: FetchMethod,
  compute: (payload: TPayload) => string,
  option?: EndpointOption<TPayload, TResult>
): Endpoint<TPayload, TResult> => {
  // endpoint url를 자동으로 계산하여 payload만 인자로 받는 fetcher 함수를 생성합니다.

  // 일반적인 Fetcher 함수 생성
  const __computedFetcher = async (p: TPayload) => {
    const response = await fetcher[method](
      compute(p),
      // 자동으로 endpoint를 계산해줍니다. 이를 통해 함수는 endpoint를 주입받습니다.
      option?.request ? option.request(p) : undefined
    );
    if (option?.successOnly) {
      return response?.status === 200;
    } else {
      return await response?.json();
    }
  };

  let fetcherWithComputedEndpoint = __computedFetcher;

  // Mock Mode 인 경우 등록된 함수로 Mocking 합니다
  if (MOCKING_MODE && !option?.mirror) {
    fetcherWithComputedEndpoint = createMockFetcher(option?.mock);
  }

  return Object.assign(fetcherWithComputedEndpoint, {
    compute,
  });
};

export const transformEndpoint = <Transformed, TResult, TPayload>(
  endpoint: Endpoint<TPayload, TResult>,
  transform: (raw: TResult) => Transformed
): Endpoint<TPayload, Transformed> => {
  const fetchWithTransform = async (p: TPayload) => transform(await endpoint(p));

  return Object.assign(fetchWithTransform, {
    compute: endpoint.compute,
  });
};

//#endregion

//#region MegabrainAPIError

export class MegabrainAPIError extends Error {
  description: string;
  method: FetchMethod;
  args?: Parameters<typeof fetch>;

  constructor(
    method: MegabrainAPIError['method'],
    description: MegabrainAPIError['description'],
    args?: MegabrainAPIError['args']
  ) {
    super();
    this.description = description;
    this.method = method;
    this.args = args;
  }

  public static of(...args: ConstructorParameters<typeof MegabrainAPIError>) {
    return new this(...args);
  }

  get message() {
    return this.toString();
  }

  public toString(): string {
    return `[MegabrainAPIError:${this.method}] ${this.description}\nerror: ${JSON.stringify(
      this,
      null,
      2
    )}`;
  }
}

//#endregion

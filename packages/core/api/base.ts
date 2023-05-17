// ! MOCK
const MOCKING_MODE = true;

//#region

type APIResponse<TData = unknown> = TData; // or { data: TData }

const unwrapResponse = async (response: Response) => {
  const json = (await response.json()) as APIResponse;
  // eslint-disable-next-line
  return json as any;
};

//#endregion

//#region Fetcher

type FetcherFunction = <TResult = unknown>(
  ...args: Parameters<typeof fetch>
) => Promise<APIResponse<TResult>>;

type FetchOption = Parameters<FetcherFunction>[1];

const fetcherMethods = ['GET', 'PUT', 'POST', 'DELETE', 'MOCK'] as const;

type FetchMethod = (typeof fetcherMethods)[number];

const fetchErrorHandler = (err: MegabrainAPIError) => {
  throw err;
};

export const fetcher = fetcherMethods.reduce((_fetcher, item) => {
  _fetcher[item] = async (...args) => {
    try {
      const response = await fetch(args[0], {
        method: item,
        ...args[1],
      });
      return await unwrapResponse(response);
    } catch (err) {
      fetchErrorHandler(MegabrainAPIError.of(err, item, args));
    }
  };
  return _fetcher;
}, {} as Record<FetchMethod, FetcherFunction>);

//#endregion

//#region Endpoint

interface EndpointOption<TPayload, TResult> {
  request?: (payload: TPayload) => FetchOption;
  mock?: (payload: TPayload) => Promise<TResult>;
}

export type Endpoint<TPayload = unknown, TResult = unknown> = ((
  payload: TPayload
) => Promise<TResult>) & {
  compute(payload: TPayload): string;
};

const mockFetcher = <TMock = unknown>(mock?: TMock) => {
  if (typeof mock === 'function') {
    return mock;
  } else {
    throw MegabrainAPIError.of(
      'MOCK 함수가 비어있는 경우 [MOCK-MODE]를 사용할 수 없습니다.',
      'MOCK'
    );
  }
};

export const createEndpoint = <TResult = unknown, TPayload = string>(
  method: FetchMethod,
  compute: (payload: TPayload) => string,
  option?: EndpointOption<TPayload, TResult>
): Endpoint<TPayload, TResult> => {
  // endpoint url를 자동으로 계산하여 payload만 인자로 받는 fetcher 함수를 생성합니다.
  const fetcherWithComputedEndpoint = MOCKING_MODE
    ? // Mock Mode 인 경우 등록된 함수로 Mocking 합니다
      (p: TPayload) => mockFetcher(option?.mock)(p)
    : // 일반적인 Fetcher 함수 생성
      (p: TPayload) =>
        fetcher[method]<TResult>(
          compute(p),
          // 자동으로 endpoint를 계산해줍니다. 이를 통해 함수는 endpoint를 주입받습니다.
          option?.request ? option.request(p) : undefined
        );
  return Object.assign(fetcherWithComputedEndpoint, {
    compute,
  });
};
//#endregion

//#region MegabrainAPIError

export class MegabrainAPIError extends Error {
  error: unknown;
  method: FetchMethod;
  args?: Parameters<typeof fetch>;

  constructor(
    error: MegabrainAPIError['error'],
    method: MegabrainAPIError['method'],
    args?: MegabrainAPIError['args']
  ) {
    super('API ERROR');
    this.error = error;
    this.method = method;
    this.args = args;
  }

  static of(...args: ConstructorParameters<typeof MegabrainAPIError>) {
    return new this(...args);
  }
}

//#endregion

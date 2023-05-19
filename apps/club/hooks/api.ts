import type { Endpoint } from '@megabrain/core';
import useSWR, { SWRConfiguration } from 'swr';

type Key = string | false;

/**
 * @example
 * ```
 * const {data, error} = useApi(getTopic, topicId)
 * ```
 * @param apiPoint apiPoint 객체
 * @param payload fetcher의 파라미터로 전달됨
 * @param active falsy 한 값이 들어가는 경우 fetcher를 호출하지 않음
 * @see https://swr.vercel.app/ko/docs/conditional-fetching
 * @returns
 */
export const useApi = <TData = unknown, TPayload = unknown, TError = unknown>(
  apiPoint: Endpoint<TPayload, TData> | null,
  payload?: TPayload | null,
  options?: SWRConfiguration
) =>
  useSWR<TData, TError, Key>(
    apiPoint ? apiPoint.compute(payload!) : false,
    () => apiPoint!(payload!), // apiPoint falsy 한 경우에는 fetcher를 호출하지 않는다는 것을 전제로 동작.
    options // SWR Option 추가
  );

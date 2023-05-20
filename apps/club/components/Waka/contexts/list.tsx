import { createContext, useContext, useReducer } from 'react';
import { WakaMember, WakaPeriod } from '@megabrain/core';
import { WakaTimeLimit } from '../utils';

interface WakaListValueContext {
  period: WakaPeriod;
  members: WakaMember[];
  limit: number;
}

type WakaListDispatchContext = React.Dispatch<Partial<WakaListValueContext>>;

const wakaListValueContext = createContext<WakaListValueContext | null>(null);
const wakaListDispatchContext = createContext<WakaListDispatchContext | null>(null);

export const useWakaListValue = () => {
  const val = useContext(wakaListValueContext);
  if (!val) {
    throw Error('Error No WakaListValue Context');
  }
  return val;
};

export const useWakaListDispatch = () => {
  const val = useContext(wakaListDispatchContext);
  if (!val) {
    throw Error('Error No WakaListDispatch Context');
  }
  return val;
};

export const reducer = (
  prevVal: WakaListValueContext,
  newVal: Partial<WakaListValueContext>
): WakaListValueContext => postProcess({ ...prevVal, ...newVal });

// ! 항상 내림차순으로 정렬합니다.
export const postProcess = (val: WakaListValueContext): WakaListValueContext => {
  const period = val.period;
  val.members.sort((lhs, rhs) => rhs[period]!.during - lhs[period]!.during);
  val.limit = WakaTimeLimit[period];
  return val;
};

const INITIAL_VALUE = Object.freeze<WakaListValueContext>({
  period: WakaPeriod.Seven,
  members: [],
  limit: WakaTimeLimit[WakaPeriod.Seven],
});

export const wrapWakaListContext = <T,>(Component: React.FC<T>) => {
  const Wrapped: React.FC<T & JSX.IntrinsicAttributes> = (props) => {
    const [value, dispatch] = useReducer(reducer, INITIAL_VALUE);

    return (
      <wakaListDispatchContext.Provider value={dispatch}>
        <wakaListValueContext.Provider value={value}>
          <Component {...props} />
        </wakaListValueContext.Provider>
      </wakaListDispatchContext.Provider>
    );
  };
  Wrapped.displayName = Component.displayName;
  return Wrapped;
};

import { createContext, useContext, useReducer } from 'react';
import { WakaMember, WakaPeriod } from '@megabrain/core';
import { WakaTimeLimit } from '../utils';

interface WakaMemberValueContext {
  period: WakaPeriod;
  members: WakaMember[];
  limit: number;
}

type WakaMemberDispatchContext = React.Dispatch<Partial<WakaMemberValueContext>>;

const wakaMemberValueContext = createContext<WakaMemberValueContext | null>(null);
const wakaMemberDispatchContext = createContext<WakaMemberDispatchContext | null>(null);

export const useWakaMemberValue = () => {
  const val = useContext(wakaMemberValueContext);
  if (!val) {
    throw Error('Error No WakaListValue Context');
  }
  return val;
};

export const useWakaMemberDispatch = () => {
  const val = useContext(wakaMemberDispatchContext);
  if (!val) {
    throw Error('Error No WakaListDispatch Context');
  }
  return val;
};

export const reducer = (
  prevVal: WakaMemberValueContext,
  newVal: Partial<WakaMemberValueContext>
): WakaMemberValueContext => postProcess({ ...prevVal, ...newVal });

// ! 항상 내림차순으로 정렬합니다.
export const postProcess = (val: WakaMemberValueContext): WakaMemberValueContext => {
  const period = val.period;
  val.members.sort((lhs, rhs) => rhs[period]! - lhs[period]!);
  val.limit = WakaTimeLimit[period];
  return val;
};

const INITIAL_VALUE = Object.freeze<WakaMemberValueContext>({
  period: WakaPeriod.Seven,
  members: [],
  limit: WakaTimeLimit[WakaPeriod.Seven],
});

export const wrapWakaMemberContext = <T,>(Component: React.FC<T>) => {
  const Wrapped: React.FC<T & JSX.IntrinsicAttributes> = (props) => {
    const [value, dispatch] = useReducer(reducer, INITIAL_VALUE);

    return (
      <wakaMemberDispatchContext.Provider value={dispatch}>
        <wakaMemberValueContext.Provider value={value}>
          <Component {...props} />
        </wakaMemberValueContext.Provider>
      </wakaMemberDispatchContext.Provider>
    );
  };
  Wrapped.displayName = Component.displayName;
  return Wrapped;
};

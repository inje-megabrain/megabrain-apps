import { Fragment } from 'react';

export interface ListProps<T, O> {
  items: T[];
  getKey(item: T, index: number): string | number;
  additional?: O;
  children(item: T, seqNo: number, additional?: O): JSX.Element;
}

export const List = <T, O = void>({ items, children, getKey, additional }: ListProps<T, O>) => {
  return (
    <>
      {Array.isArray(items)
        ? items.map((item, idx) => (
            <Fragment key={getKey(item, idx)}>{children(item, idx, additional)}</Fragment>
          ))
        : null}
    </>
  );
};

export default List;

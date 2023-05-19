import { Fragment } from 'react';

export interface ListProps<T> {
  items: T[];
  getKey(item: T, index: number): string | number;
  children(item: T, seqNo: number): JSX.Element;
}

export const List = <T,>({ items, children, getKey }: ListProps<T>) => {
  return (
    <>
      {Array.isArray(items)
        ? items.map((item, idx) => (
            <Fragment key={getKey(item, idx)}>{children(item, idx)}</Fragment>
          ))
        : null}
    </>
  );
};

export default List;

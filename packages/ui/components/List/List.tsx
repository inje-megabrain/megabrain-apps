interface ListProps<T> {
  items: T[];
  getKey(item: T, index: number): string | number;
  children: React.FC<{ item: T; seqNo: number }>;
}

export const List = <T,>({ items, children, getKey }: ListProps<T>) => {
  const Child = children;

  return (
    <>
      {Array.isArray(items)
        ? items.map((item, idx) => (
            <Child
              key={getKey ? getKey(item, idx) : idx}
              item={item}
              seqNo={idx}
            />
          ))
        : null}
    </>
  );
};

export default List;

export const calcPercentage = (currentValue: number, limit: number) =>
  ((currentValue / limit) * 100).toFixed(2);

export const randomHexColor = () => {
  return '#' + Math.round(Math.random() * 0xffffff).toString(16);
};

export const getMaxIndex = (values: number[]) =>
  values.reduce((acc, d, i, arr) => (arr[acc] < d ? i : acc), 0);

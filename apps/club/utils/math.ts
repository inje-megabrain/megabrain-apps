export const calcPercentage = (currentValue: number, limit: number) =>
  ((currentValue / limit) * 100).toFixed(2);

export const randomHexColor = () => '#' + Math.round(Math.random() * 0xffffff).toString(16);

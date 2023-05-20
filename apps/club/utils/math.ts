export const calcPercentage = (currentValue: number, limit: number) =>
  ((currentValue / limit) * 100).toFixed(2);

export const randomHexColor = (expectColor = 0x000000, delta = 0) => {
  let color = 0x000000;

  do {
    color = Math.round(Math.random() * 0xffffff);
  } while (!inBoundary(color, expectColor, delta));

  return '#' + color.toString(16);
};

const inBoundary = (value: number, standard: number, delta: number) => {
  return Math.abs(value - standard) <= delta;
};

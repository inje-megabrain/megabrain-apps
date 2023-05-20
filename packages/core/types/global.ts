export {};

declare global {
  export interface Window {
    MEGA_API_SET_MOCK(value: boolean): void;
  }

  // eslint-disable-next-line
  var core: {
    WAKA_BASE_URL: string;
    SCHEDULE_BASE_URL: string;
  };
}

export {};

declare global {
  export interface Window {
    MEGA_API_SET_MOCK(value: boolean): void;
  }
}

export {};

declare global {
  export interface Window {
    MEGA_API_SET_MOCK(value: boolean): void;
  }
  // eslint-disable-next-line
  var core: MegabrainCore;
  // eslint-disable-next-line
  var defineMegabrainCore: (config: MegabrainCore) => void;
}

interface MegabrainCore {
  WAKA_BASE_URL: string;
}

interface MegabrainConfig {
  core: Record<keyof (typeof global)['core'], string | undefined>;
  notion?: typeof global extends { notion: object }
    ? Record<keyof (typeof global)['notion'], string | undefined>
    : never;
}

export const defineConfig = (config: MegabrainConfig): void => {
  (
    Object.entries(config) as [keyof MegabrainConfig, MegabrainConfig[keyof MegabrainConfig]][]
  ).forEach(([key, value]) => {
    // @ts-ignore
    global[key] = value || '';
  });
};

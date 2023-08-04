export enum MegabrainUIErrorTag {
  NOT_SATISFIED,
}

export class MegabrainUIError extends Error {
  reason: string;
  tag: MegabrainUIErrorTag;

  constructor(tag: MegabrainUIErrorTag, reason: string) {
    super(reason);
    this.tag = tag;
    this.reason = reason;
  }

  static of(...args: ConstructorParameters<typeof MegabrainUIError>) {
    return new this(...args);
  }
}

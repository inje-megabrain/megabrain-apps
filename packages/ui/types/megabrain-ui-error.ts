export enum MegabrainUIErrorTag {
  NOT_SATISFIED,
}

export class MegabrainUIError extends Error {
  reason: string;
  tag: MegabrainUIErrorTag;
  caller: string;

  constructor(tag: MegabrainUIErrorTag, reason: string) {
    super(reason);
    this.tag = tag;
    this.reason = reason;
    this.caller = arguments.callee.caller.name;
  }

  static of(...args: ConstructorParameters<typeof MegabrainUIError>) {
    return new this(...args);
  }
}

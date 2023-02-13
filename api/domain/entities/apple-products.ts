import crypto from "crypto";

export default class AppleProduct {
  public id!: string;
  public name!: string;
  public version!: string;
  public hasUpdate!: boolean;
  public type!: string;
  public releaseDate!: string;

  constructor(props: Omit<AppleProduct, "id">, id?: string) {
    Object.assign(this, props);
    if (!id) {
      this.id = crypto.randomUUID();
    }
  }
}

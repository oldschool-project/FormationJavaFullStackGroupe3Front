import { IChanel } from '../interfaces/chanel-i';

export class Channel implements IChanel {
  public id!: number;
  public name: string = `My channel #${this.id}`;
  constructor(obj?: Partial<Channel>) {
    if (obj) {
      return Object.assign(this, obj);
    }
  }
}

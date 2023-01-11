import { ChannelI } from '../interfaces/channel-i';

export class Channel implements ChannelI {
  public id!: number;
  public name: string = `My channel #${this.id}`;
  description!: string;

  constructor(obj?: Partial<Channel>) {
    if (obj) {
      return Object.assign(this, obj);
    }
  }
}

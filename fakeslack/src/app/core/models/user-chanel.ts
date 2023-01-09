import { IUserChannel } from '../interfaces/user-chanel-i';

export class UserChanel implements IUserChannel {
  public userId!: number;
  public chanelId!: number;

  constructor(obj?: Partial<UserChanel>) {
    if (obj) {
      return Object.assign(this, obj);
    }
  }
}

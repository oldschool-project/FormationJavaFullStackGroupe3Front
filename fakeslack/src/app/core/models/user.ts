import { IUser } from '../interfaces/user-i';

export class User implements IUser {
  public id!: number;
  public name: string = `user #${this.id}`;
  constructor(obj?: Partial<User>) {
    if (obj) {
      return Object.assign(this, obj);
    }
  }
}

import { UserRole } from '../enums/user-role';
import { UserI } from '../interfaces/user-i';

export class User implements UserI {
  id!: number;
  email!: string;
  password!: string;
  username: string = `user #${this.id}`;
  isLogged: boolean = false;
  role: UserRole = UserRole.USER;

  constructor(obj?: Partial<User>) {
    if (obj) {
      return Object.assign(this, obj);
    }
  }
}

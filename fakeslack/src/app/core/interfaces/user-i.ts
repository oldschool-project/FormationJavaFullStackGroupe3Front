import { UserRole } from '../enums/user-role';

export interface UserI {
  id: number;
  email: string;
  password: string;
  username: string;
  isLogged: boolean;
  role: UserRole;
}

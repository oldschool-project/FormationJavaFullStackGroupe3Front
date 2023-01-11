import { MessageI } from '../interfaces/message-i';

export class Message implements MessageI {
  id!: number;
  content!: string;
  created_at: Date = new Date();
  updated_at!: Date;
  channel_id: number = 1;
  user_id: number = 1;

  constructor(obj?: Partial<Message>) {
    if (obj) {
      return Object.assign(this, obj);
    }
  }
}

import { IMessage } from '../interfaces/message-i';

export class Message implements IMessage {
  public id!: number;
  public userId: number = 1;
  public chanelId: number = 1;
  public text!: string;
  public date: Date = new Date();
  constructor(obj?: Partial<Message>) {
    if (obj) {
      return Object.assign(this, obj);
    }
  }
}

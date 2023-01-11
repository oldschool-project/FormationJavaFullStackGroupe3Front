export interface MessageI {
  id: number;
  content: string;
  created_at: Date;
  updated_at: Date;
  channel_id: number;
  user_id: number;
}

export type ISODate = string

export type Todo = {
  text: string;
  completed_at?: ISODate;
  created_at: ISODate;
}
export interface Chat {
  id: number;
  number: string;
  thread: Message[];
}

export interface Message {
  from: number;
  timestamp: string;
  body: string;
}

export interface Chat {
  number: string;
  thread: Message[];
}

export interface Message {
  from: number;
  timestamp: string;
  body: string;
}

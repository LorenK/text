export interface Chat {
  number: string;
  thread: Message[];
  newMessage: string;
}

export interface Message {
  from: number;
  timestamp: string;
  body: string;
}

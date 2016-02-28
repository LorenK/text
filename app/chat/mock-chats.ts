import { Chat, Message } from './chat';

export var CHATS: Chat[] = [
  {
    'id': 0,
    'number' : '+19139803990',
    'thread' : [
      {
        'from' : 0,
        'timestamp': '02/28 4:11 pm',
        'body': 'This is my first message! So cool!'
      },
      {
        'from' : 1,
        'timestamp': '02/28 4:12 pm',
        'body': 'This is my response to you.'
      }
    ]
  },
  {
    'id': 1,
    'number' : '+19132444990',
    'thread' : [
      {
        'from' : 0,
        'timestamp': '03/28 4:11 pm',
        'body': 'This is my first message! So cool!'
      },
      {
        'from' : 0,
        'timestamp': '03/28 4:12 pm',
        'body': 'This is my second message! Woo!'
      }
    ]
  },
  {
    'id': 2,
    'number' : '+19139805990',
    'thread' : [
      {
        'from' : 0,
        'timestamp': '10/28 4:11 pm',
        'body': 'This is my first message! So cool!'
      },
      {
        'from' : 0,
        'timestamp': '10/28 4:12 pm',
        'body': 'This is my second message! Woo!'
      }
    ]
  }
];

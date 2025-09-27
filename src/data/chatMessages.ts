export interface Message {
  id: number;
  type: 'incoming' | 'outgoing';
  text: string;
  reactions?: string[];
}

export const messages: Message[] = [
  { id: 1, type: 'outgoing', text: 'Привет. А что такое МедиаКит?' },
  { id: 2, type: 'incoming', text: 'Привет!' },
  {
    id: 3,
    type: 'incoming',
    text: 'МедиаКит — это увлекательное обучение, представленное в формате смены в лагере. Здесь ты сможешь воплотить все свои самые смелые идеи под руководством опытных преподавателей из университета.',
  },
  {
    id: 4,
    type: 'incoming',
    text: 'На наших сменах ты научишься не только профессиональным навыкам, но и найдёшь себе друзей по интересам и научишься работать в команде!',
  },
  {
    id: 5,
    type: 'outgoing',
    text: 'Круто! Расскажи ещё.',
    reactions: ['heart', 'reaction'],
  },
];
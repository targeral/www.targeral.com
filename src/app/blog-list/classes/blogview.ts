import { Label } from './label';

class Message {
  author: string;
  date: Date;
  comment: number;
}

export class BlogView {
  title: string;
  message: Message;
  label: Label;
  content: string;

  constructor(title: string, message: Message, label: Label, content: string) {
    this.title = title;
    this.message = message;
    this.label = label;
    this.content = content;
  }
}

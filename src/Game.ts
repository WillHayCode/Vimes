import { LipwigHost } from 'lipwigjs';
import { ChatHost } from 'lipwig-chat';

export class Game {
  private chatHost: typeof ChatHost;
  constructor(host: LipwigHost, code: string) {
    this.chatHost = new ChatHost(host);
    setTimeout(() => {
      this.chatHost.sendToAll('Room Code', code);
    }, 10);
  }
}

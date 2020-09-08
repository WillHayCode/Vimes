import { LipwigHost } from 'lipwigjs';
import { ChatHost } from 'lipwig-chat';

export class Game {
  private chatHost: typeof ChatHost;
  constructor(host: LipwigHost, code: string) {
    this.chatHost = new ChatHost(host);
    setTimeout(() => {
      this.chatHost.sendToAll('Room Code', code);
    }, 10);
    this.setChatListeners();
  }

  private setChatListeners(): void {
    this.chatHost.on(/^\//, (user: string, message: string) => {
      const roll = /^\/r(oll)? ?/;
      //TODO: This will match slightly more than is ideal - /random matches
      //CONT: And splits as ['/r' , 'andom'] - check for that before doing arguments
      if (message.match(roll)) {
        const components = message.split(roll);
        let rollText = components[components.length - 1];
        rollText = rollText.replace(/ /g, '');
      }
    }, true);
  }

  private roll(roll: string): number {
    return -1;
  }
}

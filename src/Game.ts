import { LipwigHost } from 'lipwigjs';
import { ChatHost, ChatUser } from 'lipwig-chat';
import { DiceRoller, DiceRoll } from 'rpg-dice-roller';

export class Game {
  private chatHost: typeof ChatHost;
  private roller: DiceRoller;
  constructor(host: LipwigHost, code: string) {
    this.roller = new DiceRoller();
    this.chatHost = new ChatHost(host);
    setTimeout(() => {
      this.chatHost.sendToAll('Room Code', code);
    }, 10);
    this.setChatListeners();
  }

  private setChatListeners(): void {
    this.chatHost.on(/^\//, (user: typeof ChatUser, message: string) => {
      const roll = /^\/r(oll)? ?/;
      //TODO: This will match slightly more than is ideal - /random matches
      //CONT: And splits as ['/r' , 'andom'] - check for that before doing arguments
      if (message.match(roll)) {
        const components = message.split(roll);
        const rollText = components[components.length - 1];
        try {
          const result = this.roll(rollText);
          this.chatHost.sendToAll('Dice Roller', user.name + ' rolled ' + result);
        } catch(err: unknown) {
          user.send('Dice Error', 'Error attempting to roll \'' + rollText + '\'');
        }
      }
    }, true);
  }

  private roll(roll: string): number {
    const result = <DiceRoll> this.roller.roll(roll);
    return result.total;
  }
}

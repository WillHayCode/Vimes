/**
 * @author: William Hayward
 * Instantiating class for the Virtual Tabletop
 */

import { LipwigClient, LipwigHost } from 'lipwigjs';
import { Game } from './Game';
import { Player } from './Player';

export class Vimes {
  private game: Game | undefined;
  constructor() {
    this.game = undefined;

    const btnHost = document.getElementById('btnHost');

    btnHost?.addEventListener('click', () => {
      const txtName = document.getElementById('txtName') as HTMLInputElement;
      const username = txtName?.value;
      if (username == undefined || username.length == 0) {
        return;
      }

      document.getElementById('portal')?.classList.add('hidden');
      document.getElementById('loading')?.classList.remove('hidden');

      const host = new LipwigHost('ws://localhost:8989');
      host.on('created', (code: string) => {
        const client = host.createLocalClient();
        client.on('joined', () => {
          this.game = new Game(host, code);
          const player = new Player(client, username);
        });
      });
    });

    const btnClient = document.getElementById('btnJoin');

    btnClient?.addEventListener('click', () => {
      const txtName = document.getElementById('txtName') as HTMLInputElement;
      const username = txtName?.value;
      if (username == undefined || username.length == 0) {
        return;
      }

      const codeElement = document.getElementById('txtCode') as HTMLInputElement;
      const code = codeElement?.value;
      document.getElementById('portal')?.classList.add('hidden');
      document.getElementById('loading')?.classList.remove('hidden');
      const client = new LipwigClient('ws://localhost:8989', code);
      client.on('joined', () => {
        const player = new Player(client, username);
      });
    });
  }
}

new Vimes();

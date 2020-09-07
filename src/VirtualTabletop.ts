/**
 * @author: William Hayward
 * Instantiating class for the Virtual Tabletop
 */

import { LipwigClient, LipwigHost } from 'lipwigjs';
import { ChatHost, ChatClient } from 'lipwig-chat';

export class VirtualTabletop {
  private chatClient: (typeof ChatClient) | undefined;
  constructor() {
    this.chatClient = undefined;
    const btnHost = document.getElementById('btnHost');

    btnHost?.addEventListener('click', () => {
      document.getElementById('portal')?.classList.add('hidden');
      document.getElementById('loading')?.classList.remove('hidden');
      const host = new LipwigHost('ws://localhost:8989');
      const chatHost = new ChatHost(host);
      host.on('created', (code: string) => {
        document.getElementById('loading')?.classList.add('hidden');
        document.getElementById('content')?.classList.remove('hidden');
        const client = host.createLocalClient();
        this.chatClient = new ChatClient(client, 'Sam');
        this.setChatListeners();
        console.log(code);
      });
    });

    const btnClient = document.getElementById('btnJoin');

    btnClient?.addEventListener('click', () => {
      const codeElement = document.getElementById('txtCode') as HTMLInputElement;
      const code = codeElement?.value;
      document.getElementById('portal')?.classList.add('hidden');
      document.getElementById('loading')?.classList.remove('hidden');
      const client = new LipwigClient('ws://localhost:8989', code);
      client.on('joined', () => {
        document.getElementById('loading')?.classList.add('hidden');
        document.getElementById('content')?.classList.remove('hidden');
        this.chatClient = new ChatClient(client, 'Ben');
        this.setChatListeners();
      });
    });
  }

  private setChatListeners(): void {
    if (this.chatClient == undefined) {
      throw new Error();
    }
    
    this.chatClient.onAll((name: string, message: string) => {
      const chatLog = document.getElementById('chatLog');
      const messageDiv = document.createElement('p');
      const messageContent = document.createTextNode(name + ':'  + message);
      messageDiv.appendChild(messageContent);
      chatLog?.appendChild(messageDiv);
    });

    const btnSend = document.getElementById('btnSendMessage') as HTMLInputElement;
    btnSend?.addEventListener('click', () => {
      const txtMessage = document.getElementById('txtNewMessage') as HTMLInputElement;
      const message = txtMessage?.value;
      if (message == undefined || message.length == 0) {
        return;
      }

      this.chatClient.send(message);

    });
  }
}

new VirtualTabletop();

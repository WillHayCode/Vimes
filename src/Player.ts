import { LipwigClient, LipwigLocalClient } from 'lipwigjs';
import { ChatClient } from 'lipwig-chat';
export class Player {
  private chatClient: typeof ChatClient; 
  constructor(client: LipwigClient | LipwigLocalClient, username: string) {
    this.chatClient = new ChatClient(client, username);
    document.getElementById('loading')?.classList.add('hidden');
    document.getElementById('content')?.classList.remove('hidden');
    this.setChatListeners();
  }

  private setChatListeners(): void {
    if (this.chatClient == undefined) {
      throw new Error();
    }
    
    this.chatClient.onAll((username: string, message: string) => {
      const chatLog = document.getElementById('chatLog');
      const messageDiv = document.createElement('p');
      const messageContent = document.createTextNode(username + ': '  + message);
      messageDiv.appendChild(messageContent);
      chatLog?.appendChild(messageDiv);
    });

    const btnSend = document.getElementById('btnSendMessage') as HTMLInputElement;
    btnSend?.addEventListener('click', () => {
      const txtMessageID = 'txtNewMessage';
      const txtMessage = document.getElementById(txtMessageID) as HTMLInputElement;
      const message = txtMessage.value;
      txtMessage.value = '';
      if (message == undefined || message.length == 0) {
        return;
      }

      this.chatClient.send(message);
    });
  }
}

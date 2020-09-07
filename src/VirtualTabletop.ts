/**
 * @author: William Hayward
 * Instantiating class for the Virtual Tabletop
 */

import { LipwigClient, LipwigHost } from 'lipwigjs';

export class VirtualTabletop {
  constructor() {
    const btnHost = document.getElementById('btnHost');

    btnHost?.addEventListener('click', () => {
      document.getElementById('portal')?.classList.add('hidden');
      document.getElementById('loading')?.classList.remove('hidden');
      
    });

    const btnClient = document.getElementById('btnHost');

    btnClient?.addEventListener('click', () => {
      const codeElement = document.getElementById('txtCode') as HTMLInputElement;
      const code = codeElement?.value;
      document.getElementById('portal')?.classList.add('hidden');
      document.getElementById('loading')?.classList.remove('hidden');
    });
  }
}

import { LipwigClient, LipwigLocalClient } from 'lipwigjs';
export declare class Player {
    private chatClient;
    constructor(client: LipwigClient | LipwigLocalClient, username: string);
    private setChatListeners;
}

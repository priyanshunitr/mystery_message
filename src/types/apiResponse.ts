import { Message } from "../model/User";

export interface ApiResponse {
    success: boolean;
    message: string;
    isAcceptingMessage?: boolean;
    data?: any;
    messages?: Array<Message>;
}





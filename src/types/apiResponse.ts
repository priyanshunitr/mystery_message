import { Message } from "../app/page";

export interface ApiResponse {
    success: boolean;
    message: string;
    isAcceptingMessage?: boolean;
    data?: any;
    messages?: Array<Message>;
}





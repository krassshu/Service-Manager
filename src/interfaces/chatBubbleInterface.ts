export default interface ChatBubbleInterface {
    id:number;
    message:string;
    sender:string;
    sentTime:Date | string;
    messageStatus:string;
    // avatar:string;
}
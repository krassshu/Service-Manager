export default interface TaskInterface {
    title:string;
    head1:string;
    head2:string;
    head3:string;
    taskValue:[{
        taskNumber: number;
        localization:string;
        taskInfo:number;
    }]
}

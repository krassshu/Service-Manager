import Link from "next/link";
import taskInterface from "@/interfaces/taskInterface"

export default function DashboardTasks(props:taskInterface) {

    return (
        <>
            <h2 className='text-center pb-3'>{props.title}</h2>
            <table className="table-fixed w-full">
                <thead>
                    <tr>
                        <th className='border-b dark:border-gray-200 font-medium  pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left'>{props.head1}</th>
                        <th className='border-b dark:border-gray-200 font-medium  pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left'>{props.head2}</th>
                        <th className='border-b dark:border-gray-200 font-medium  pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left'>{props.head3}</th>
                    </tr>
                </thead>
                <tbody className='bg-white dark:bg-slate-400'>
                {props.taskValue.map((task, index) => (
                    <tr key={index}>
                        <td className='p-1 pl-8'><Link href={'/task/' + task.taskNumber}
                                                       className='hover:underline'>{task.taskNumber}</Link>
                        </td>
                        <td>{task.localization}</td>
                        <td>{task.taskInfo}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}
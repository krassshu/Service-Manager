import Link from "next/link";

export default function DashboardTasks() {

    return (
        <>
            <h2 className='text-center pb-3'>Assigned tasks</h2>
            <table className="table-fixed w-full">
                <thead>
                    <tr>
                        <th className='border-b dark:border-gray-200 font-medium  pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left'>Task number</th>
                        <th className='border-b dark:border-gray-200 font-medium  pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left'>Localization</th>
                        <th className='border-b dark:border-gray-200 font-medium  pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left'>Upcoming date</th>
                    </tr>
                </thead>
                <tbody className='bg-white dark:bg-neutral-700'>
                    <tr>
                        <td className='p-1 pl-8'><Link href={'/'} className='hover:underline'>239828</Link></td>
                        <td>Bydgoszcz</td>
                        <td>12.03.2024</td>
                    </tr>
                <tr>
                    <td className='p-1 pl-8'><Link href={'/'} className='hover:underline'>239828</Link></td>
                    <td>Szczecin</td>
                    <td>12.03.2024</td>
                </tr>
                <tr>
                    <td className='p-1 pl-8'><Link href={'/'} className='hover:underline'>239828</Link></td>
                    <td>Warszawa</td>
                    <td>12.03.2024</td>
                </tr>
                </tbody>
            </table>
        </>
    )
}
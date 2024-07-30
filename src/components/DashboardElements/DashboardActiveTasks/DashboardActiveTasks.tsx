import Link from "next/link";

export default function DashboardActiveTasks(){
    return(
        <>
            <h2 className='text-center pb-3'>Active tasks</h2>
            <table className="table-fixed w-full">
                <thead>
                <tr>
                    <th className='border-b dark:border-gray-200 font-medium  pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left'>Task number</th>
                    <th className='border-b dark:border-gray-200 font-medium  pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left'>Localization</th>
                    <th className='border-b dark:border-gray-200 font-medium  pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left'>Quantity </th>
                </tr>
                </thead>
                <tbody className='bg-white dark:bg-neutral-700'>
                <tr>
                    <td className='p-1 pl-8'><Link href={'/'} className='hover:underline'>239828</Link></td>
                    <td>Bydgoszcz</td>
                    <td>44</td>
                </tr>
                <tr>
                    <td className='p-1 pl-8'><Link href={'/'} className='hover:underline'>239828</Link></td>
                    <td>Szczecin</td>
                    <td>22</td>
                </tr>
                <tr>
                    <td className='p-1 pl-8'><Link href={'/'} className='hover:underline'>239828</Link></td>
                    <td>Warszawa</td>
                    <td>32</td>
                </tr>
                </tbody>
            </table>
        </>
    )
}
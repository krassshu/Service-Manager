import DashboardElements from "@/components/DashboardElements/DashboardElements";
import DashboardCalendar from "@/components/DashboardElements/DashboardCalendar/DashboardCalendar";
import DashboardTasks from "@/components/DashboardElements/DashboardTasks/DashboardTasks";
import TaskInterface from "@/interfaces/taskInterface";
import DashboardMessage from "@/components/DashboardElements/DashboardMessage/DashboardMessage";
import { createClient } from '@/utils/supabase/server';

export default async function Home() {
    const supabase = createClient();
    const {
        data: { user },
    } = await supabase.auth.getUser();

    const tasks:TaskInterface={
        title:"Assigned tasks",
        head1:"Tasks number",
        head2:"Localization",
        head3:"Quantity",
        taskValue:[{
            taskNumber: 12312,
            localization: 'Bydgoszcz',
            taskInfo: 21
        }]
    }

    return (
        <div className="grid gap-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1">
            <DashboardElements>
                <DashboardTasks {...tasks}/>
            </DashboardElements>
            <DashboardElements>
                <DashboardTasks {...tasks}/>
            </DashboardElements>
            <DashboardElements>
                <DashboardTasks {...tasks}/>
            </DashboardElements>
            <DashboardElements className="col-span-1 xl:col-span-2 md:col-span-2 sm:col-span-1 order-2 xl:order-1">
                <DashboardCalendar/>
            </DashboardElements>
            <DashboardElements className="col-span-1 sm:col-span-1 xl:col-span-1 order-1 xl:order-2">
                <DashboardMessage/>
            </DashboardElements>
        </div>
    );
}

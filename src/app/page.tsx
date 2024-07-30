import Image from "next/image";
import DashboardElements from "@/components/DashboardElements/DashboardElements";
import DashboardCalendar from "@/components/DashboardElements/DashboardCalendar/DashboardCalendar";
import DashboardTasks from "@/components/DashboardElements/DashboardTasks/DashboardTasks";
import DashboardActiveTasks from "@/components/DashboardElements/DashboardActiveTasks/DashboardActiveTasks";
export default function Home() {
  return (
      <div className="grid gap-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <DashboardElements>
            <DashboardActiveTasks/>
        </DashboardElements>
        <DashboardElements>02</DashboardElements>
        <DashboardElements>
            <DashboardTasks/>
        </DashboardElements>
        <DashboardElements>
            <DashboardCalendar/>
        </DashboardElements>
        <DashboardElements>05</DashboardElements>
        <DashboardElements>06</DashboardElements>
      </div>
  );
}

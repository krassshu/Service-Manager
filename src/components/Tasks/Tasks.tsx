import TasksHeader from "@/components/Tasks/TasksHeader/TasksHeader";
import TasksOrder from "@/components/Tasks/TasksOrder/TasksOrder";

export default function Tasks(){

    return(
        <>
            <TasksHeader/>
            <ul role="list" className="divide-y divide-gray-100">
                <TasksOrder/>
            </ul>
        </>
    )
}
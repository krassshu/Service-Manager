'use client'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid';

export default function CalendarUtil(){

    const dayCellClassNames = (date:Date) => {
        //@ts-ignore
        const day = date.date.getDay();

           if (day === 6 ){
               return "text-blue-400"
           } else if (day === 0 ){
               return "text-red-800"
           }
    };
    return(
        <FullCalendar
            plugins={[ dayGridPlugin, interactionPlugin, timeGridPlugin]}
            initialView={"dayGridMonth"}
            headerToolbar={
                {
                    start:"",
                    center:'prev title next',
                    end:""
                }
            }
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            firstDay={1}
            aspectRatio={1.5}
            //@ts-ignore
            dayCellClassNames={dayCellClassNames}
            timeZone='local'
        />
    )
}
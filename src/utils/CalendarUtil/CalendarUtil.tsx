'use client'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

export default function CalendarUtil({initialView}:string){

    return(
        <FullCalendar
            plugins={[ dayGridPlugin, interactionPlugin, timeGridPlugin]}
            initialView={initialView}
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            timeZone='local'
        />
    )
}
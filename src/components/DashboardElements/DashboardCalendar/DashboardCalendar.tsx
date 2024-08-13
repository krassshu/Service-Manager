'use client'
import dayGridPlugin from "@fullcalendar/daygrid";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";

export default function DashboardCalendar(){

    return(
        <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridWeek"
            firstDay={1}
            height={"650px"}
            locale="en-UK"
            dayHeaderFormat={{
                weekday: 'short',
                month: '2-digit',
                day: '2-digit',
            }}
        />

    )
}
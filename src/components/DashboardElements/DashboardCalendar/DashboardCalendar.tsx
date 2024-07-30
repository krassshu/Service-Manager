'use client'
import dayGridPlugin from "@fullcalendar/daygrid";
import FullCalendar from "@fullcalendar/react";

export default function DashboardCalendar(){

    return(
        <FullCalendar
            plugins={[ dayGridPlugin ]} initialView="dayGridMonth"/>
    )
}
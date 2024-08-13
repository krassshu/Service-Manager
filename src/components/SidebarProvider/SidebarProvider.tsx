"use client";
import { createContext, useState } from "react";

export const SidebarContext = createContext({
    isSidebarOpen: false,
    toggleSidebar: () => {},
});

export default function SidebarProvider({ children }: { children: React.ReactNode }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
        console.log(isSidebarOpen)
    };

    return (
        <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
            {children}
        </SidebarContext.Provider>
    );
}

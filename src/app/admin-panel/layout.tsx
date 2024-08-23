import AdminPanelNav from "@/components/AdminPanelNav/AdminPanelNav";

export default function AdminLayout({children,}: Readonly<{children: React.ReactNode;}>) {

    return(
    <>
        <AdminPanelNav/>
        {children}
    </>
    )
}
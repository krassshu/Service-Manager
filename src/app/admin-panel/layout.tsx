import AdminPanelNav from "@/components/AdminPanel/AdminPanelNav/AdminPanelNav";

export default function AdminLayout({children,}: Readonly<{children: React.ReactNode;}>) {

    return(
    <>
        <AdminPanelNav/>
        {children}
    </>
    )
}
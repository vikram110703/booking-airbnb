import { Outlet } from "react-router-dom"
import { Header } from "./Header"

export const Layout = () => {
    return (
        <div className="p-4 px-8 flex flex-col min-h-screen">
            <Header />
            <Outlet />
        </div>
    )
};
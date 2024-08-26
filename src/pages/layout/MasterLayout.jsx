import { Outlet } from "react-router-dom"
import { SidebarContextProvider } from "../../contexts/SidebarContext"
import Sidebar from "./Sidebar/Sidebar"

const MasterLayout = () => {
    return (
        <div className="">
            <div className="flex flex-row w-full h-dvh">
                <SidebarContextProvider>
                    <Sidebar />
                    <Outlet />
                </SidebarContextProvider>           
            </div>
        </div>
    )
}

export default MasterLayout
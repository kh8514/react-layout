import { Outlet } from "react-router-dom"
import { SidebarContextProvider } from "../../contexts/SidebarContext"
import Sidebar from "./Sidebar/Sidebar"
import Header from "./Header/Header"

import "./layout.scss"

const MasterLayout = () => {
    return (
        <>
            <SidebarContextProvider>
                <Sidebar className="App-sidebar"/>  
                <div className="App-content md:pl-83">
                    <Header className="App-header"/>
                    <Outlet className="App-main"/>
                </div>
            </SidebarContextProvider>           
        </>
    )
}

export default MasterLayout
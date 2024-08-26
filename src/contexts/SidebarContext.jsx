import { createContext, useContext, useState } from "react"


const SidebarContext = createContext(null)

const SidebarContextProvider = ({children}) => {

    const [isOpen, setIsOpen] = useState(false);
    const [activeItem, setActiveItem] = useState("")

    const handleOpen = () => {
        setIsOpen(!isOpen)
    }

    const handleActiveItem = (item) => {
        setActiveItem(item)
    }

    return (
        <SidebarContext.Provider value={{isOpen, handleOpen, activeItem, handleActiveItem}}>
            {children}
        </SidebarContext.Provider>
    )
}

const useSidebarContext = () => {
    const values = useContext(SidebarContext)
    if (values == null) {
        throw new Error('SidebarContext 안에서사용해주세요');
    }
    return values;
}

export {SidebarContextProvider, useSidebarContext}
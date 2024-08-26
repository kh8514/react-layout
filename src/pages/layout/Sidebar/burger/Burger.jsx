import { useSidebarContext } from "contexts/SidebarContext"

const Burger = () => {
    const {isOpen, handleOpen, handleActiveItem} = useSidebarContext()
    const handleClick = () => {
        handleOpen()
        if(isOpen) {
            handleActiveItem("")
        }
    }
    return(
        <button className="burger-button" onClick={handleClick}>
            <span className={`burger ${isOpen ? "is-closed" : ""}`}></span>
        </button>
    )
}

export default Burger
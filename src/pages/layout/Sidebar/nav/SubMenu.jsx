import { useRef } from "react";
import NavButton from "./NavButton";

const SubMenu = ({item, activeItem, handleClick}) => { 
    const navRef = useRef(null)
    const isSubNavOpen = (item, items) => items.some(i=> i=== activeItem || item === activeItem)

    return (
        <div className={`sub-nav ${isSubNavOpen(item.name, item.items) ? "open" : ""}`}
        style={{height: !isSubNavOpen(item.name, item.items)?0:navRef.current?.clientHeight}}
        >
            <div ref={navRef} className="sub-nav-inner">
                {item?.items.map(subItem => (
                    <NavButton onClick={handleClick} name={subItem} isActive={activeItem===subItem}/>
                ))}
            </div>
        </div>
    )
}

export default SubMenu;
import "./sidebar.scss"

import NavHeader from "./nav/NavHeader";
import NavButton from "./nav/NavButton";
import SubMenu from "./nav/SubMenu";
import { IconAddBox, IconCart, IconHeart, IconHome, IconLock, IconSetting } from "assets/icons/Icons";
import { useSidebarContext } from "contexts/SidebarContext";
import NavFooter from "./nav/NavFooter";

const menuItems = [
    {
        name: "Home",
        icon: <IconHome />,
    },
    {
        name: "Settings",
        icon: <IconSetting />,
        items: ["Display", "Editor", "Theme", "Interface"],
    },
    {
        name: "Create",
        icon: <IconAddBox />,
        items: ["Article", "Document", "Report"],
    },
    {
        name: "Account",
        icon: <IconLock />,
        items: ["Dashboard", "Logout"],
    },
    {
        name: "Products",
        icon: <IconHeart />,
    },
    {
        name: "Favourites",
        icon: <IconCart />,
    },
];

const Sidebar = () => {
    const {isOpen, handleOpen, activeItem, handleActiveItem} = useSidebarContext()

    const handleClick = (item) => {
        handleActiveItem(item !== activeItem ? item : "")
        if(!isOpen) {
            handleOpen()
        }

    }

    return (
        <section>
            <aside className={`sidebar${isOpen ? " open" : ""}`}>
                <NavHeader/>
                {menuItems.map((item, index)=>(
                    <nav className="sidebar-nav">
                        {!item.items && (
                            <NavButton
                                key={`mm-${index}`}
                                onClick={handleClick}
                                name={item.name}
                                icon={item.icon}
                                isActive={activeItem === item.name}
                                hasSubNav={!!item.items}
                            />
                        )}
                        {item.items && (
                            <>
                                <NavButton
                                    key={`m-${index}`}
                                    onClick={handleClick}
                                    name={item.name}
                                    icon={item.icon}
                                    isActive={activeItem === item.name}
                                    hasSubNav={!!item.items}
                                />
                                <SubMenu
                                    key={`s-${index}`}
                                    activeItem={activeItem}
                                    handleClick={handleClick}
                                    item={item}
                                />
                            </>
                        )}
                    </nav>
                ))}
                <NavFooter />
            </aside>
        </section>
    )
}
export default Sidebar
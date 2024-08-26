import Burger from "../burger/Burger"

const NavHeader = () => {
    return (
        <header className="sidebar-header">
            <Burger />
            <span className="logo">LOGO</span>
        </header>
    )
}

export default NavHeader
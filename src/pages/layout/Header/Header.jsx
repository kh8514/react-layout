import "./header.scss"
import Avatar from "./avatar/Avatar"

const Header = () => {
    return (
        <nav className="nav-header w-pull flex justify-center align-center sticky top-0">
            <div className="nav-menu bg-white mt-5">
                <div>
                    <div className="md:hidden">11</div>
                </div>
                <div className="nvb-right flex items-center gap-5">
                    <ul>
                        <li>
                            <Avatar />
                        </li>
                    </ul>
                </div>
            </div>

        </nav>
    )
}

export default Header
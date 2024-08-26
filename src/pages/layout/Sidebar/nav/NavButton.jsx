
import { IconDownArrow } from "assets/icons/Icons";
import Icon from "components/Icon";

const NavButton = ({
    onClick, name, icon, isActive, hasSubNav
}) => {
    const handleClick = (e) => {
        onClick(name)
    }

    return (
        <button
            type="button"
            onClick={handleClick}
            className={`nav-button ${isActive ? "active" : ""}`}
        >
            {icon && <Icon icon={icon} /> }
            <div className="hasSub">
                <span>{name}</span>
                <p>{name}</p>
                {hasSubNav && <Icon icon={<IconDownArrow/>} />}
            </div>
        </button>
    )
}

export default NavButton
import { IconDownArrow } from "assets/icons/Icons";
import Icon from "components/Icon";
import { useNavigate } from "react-router-dom";

const NavButton = ({ onClick, name, icon, isActive, hasSubNav, link }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    onClick(name);

    const isOpen = document
      .querySelector(".sidebar")
      .classList.contains("open");

    console.log(isOpen);

    if (isOpen && link) {
      navigate(`${link}`);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`nav-button ${isActive ? "active" : ""}`}
    >
      {icon && <Icon icon={icon} />}
      <div className="hasSub">
        <span>{name}</span>
        <p>{name}</p>
        {hasSubNav && <Icon icon={<IconDownArrow />} />}
      </div>
    </button>
  );
};

export default NavButton;

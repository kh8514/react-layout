import avatarImg from "assets/images/avatar.png";
import classNames from "classnames";
import styles from "assets/scss/dropDown.module.scss";
import { useRef } from "react";
import useDetectClose from "hooks/useDetectClose";
import { Link } from "react-router-dom";

const Avatar = () => {
  const dropDownRef = useRef(null);
  const [isOpen, setIsOpen] = useDetectClose(dropDownRef, false);
  return (
    <>
      <div
        className="relative"
        ref={dropDownRef}
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          data-dropdown-toggle="userDropdown"
          data-dropdown-placement="bottom-start"
          className="w-10 h-10 rounded-full cursor-pointer"
          src={avatarImg}
          alt="User Avatar"
        />
        <span className="bottom-0 left-7 absolute w-3.5 h-3.5 bg-green-400 border-solid border-2 border-white dark:border-gray-800 rounded-full"></span>
        <ul className={classNames(styles.menu, { [styles.active]: isOpen })}>
          <li>
            <Link to="/user">마이페이지</Link>
          </li>
          <li>
            <Link to="/test">로그아웃</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Avatar;

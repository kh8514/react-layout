import avatarImg from "../../../../assets/images/avatar.png"
import classNames from 'classnames';
import styles from '../../../../assets/scss/dropDown.module.scss';
import { useRef } from "react";
import useDetetClose from "../../../../hooks/useDetectClose";


const Avatar = () => {
    const ref = useRef(null)
    const [isOpen, setIsOpen] = useDetetClose(ref, false)
    return (
        <div className="relative">
            <img  type="button" onClick={() => setIsOpen(!isOpen)} data-dropdown-toggle="userDropdown" data-dropdown-placement="bottom-start" class="w-10 h-10 rounded-full cursor-pointer" src={avatarImg} alt="User Avatar" />
            <span class="bottom-0 left-7 absolute w-3.5 h-3.5 bg-green-400 border-solid border-2 border-white dark:border-gray-800 rounded-full"></span>
            <ul ref={ref}
                className={classNames(styles.menu, {[styles.active]: isOpen})}
            >
                <li>logout</li>
                <li>logout</li>
                <li>logout</li>
            </ul>
        </div>
    )
}

export default Avatar
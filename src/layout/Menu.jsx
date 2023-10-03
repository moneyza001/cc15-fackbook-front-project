import { HouseIcon, UserGroupIcon } from "../icons";
import MenuItem from "./MenuItem";
import { useLocation } from "react-router-dom";

const menus = [
    { id: 1, to: "/", icon: HouseIcon },
    { id: 2, to: "/friend", icon: UserGroupIcon },
];

export default function Menu() {
    const { pathname } = useLocation();
    return (
        <nav className="flex justify-center items-center gap-2 ">
            {menus.map((el) => (
                <MenuItem
                    key={el.id}
                    to={el.to}
                    Icon={el.icon}
                    active={pathname === el.to}
                />
            ))}
        </nav>
    );
}

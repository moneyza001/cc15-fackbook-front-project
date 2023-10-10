import { Link } from "react-router-dom";
import { FacebookIcon } from "../icons/index";
import Menu from "./Menu";
import Dropdown from "./Dropdown";

export default function Header() {
    return (
        <header className="grid grid-cols-3 px-4 shadow-lg sticky top-0 bg-white z-30">
            <div className="py-2 justify-self-start ">
                <Link to="/">
                    <FacebookIcon />
                </Link>
            </div>
            <Menu />
            <div className="justify-self-end self-center">
                <Dropdown />
            </div>
        </header>
    );
}

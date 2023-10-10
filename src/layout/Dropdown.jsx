import Avatar from "../components/Avatar";
import { Link } from "react-router-dom";
import { RightFromBracketIcon } from "../icons";
import { useAuth } from "../hook/use-auth";
import useDropdown from "../hook/use-dropdown";

export default function Dropdown() {
    const { dropDownEl, isOpen, setIsOpen } = useDropdown();

    const { logout, authUser } = useAuth();

    return (
        <div className="relative" ref={dropDownEl}>
            <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                <Avatar src={authUser.profileImage} />
            </div>
            {isOpen && (
                <div className="w-96 absolute right-0 translate-y-2 border rounded-xl shadow-xl p-2 bg-white">
                    <Link
                        to={`/profile/${authUser.id}`}
                        onClick={() => setIsOpen(false)}
                    >
                        <div className="flex gap-4 p-2 items-center rounded-xl hover:bg-gray-100">
                            <Avatar
                                className="h-14"
                                src={authUser.profileImage}
                            />
                            <div>
                                <div className="font-semibold">
                                    {authUser.firstName} {authUser.lastName}
                                </div>
                                <div className="text-sm text-gray-500">
                                    See your Profile
                                </div>
                            </div>
                        </div>
                    </Link>
                    <hr className=" m-2 border" />
                    <div
                        className="flex gap-4 p-2 items-center cursor-pointer hover:bg-gray-100 rounded-xl"
                        onClick={logout}
                    >
                        <div className="bg-gray-300 h-9 aspect-square rounded-full flex justify-center items-center">
                            <RightFromBracketIcon />
                        </div>
                        <div className="font-medium text-sm">Log out</div>
                    </div>
                </div>
            )}
        </div>
    );
}

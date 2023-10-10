import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { EllipsisIcon } from "../../icons";
import formatTimeAgo from "../../utils/timeAgo";
import useDropdown from "../../hook/use-dropdown";
import { useAuth } from "../../hook/use-auth";

export default function PostHeader({ postObj, deletePost }) {
    const { dropDownEl, isOpen, setIsOpen } = useDropdown();
    const { authUser } = useAuth();

    const handdleClickDelete = () => {
        deletePost(postObj.id);
    };

    return (
        <div className="flex gap-4">
            <div>
                <Link to={`/profile/${postObj.user.id}`}>
                    <Avatar src={postObj.user.profileImage} />
                </Link>
            </div>

            <div className="flex flex-col flex-1">
                <Link
                    to={`/profile/${postObj.user.id}`}
                    className="hover:underline text-sm font-semibold self-start"
                >
                    {postObj.user.firstName} {postObj.user.lastName}
                </Link>
                <small className="text-gray-500">
                    {formatTimeAgo(postObj.createdAt)}
                </small>
            </div>

            {authUser.id === postObj.user.id && (
                <div className="relative" ref={dropDownEl}>
                    <div
                        className="aspect-square h-8  hover:bg-gray-100 cursor-pointer rounded-full flex items-center justify-center"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <EllipsisIcon className="fill-gray-500" />
                    </div>
                    {isOpen && (
                        <ul className="bg-white absolute right-0 translate-y-1 border rounded-lg p-2 shadow w-36 z-50">
                            <li className="hover:bg-gray-200 rounded-lg p-2 text-sm font-semibold cursor-pointer">
                                Edit
                            </li>
                            <li
                                className="hover:bg-gray-200 rounded-lg p-2 text-sm font-semibold cursor-pointer"
                                onClick={handdleClickDelete}
                            >
                                Delete
                            </li>
                        </ul>
                    )}
                </div>
            )}
        </div>
    );
}

import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import AuthUserAction from "./AuthUserAction";
import FriendAction from "./FriendAction";
import ReceiverAction from "./ReceiverAction";
import RequesterAction from "./RequesterAction";
import UnKnownAction from "./UnKnownAction";

export default function ProfileInfo({
    profileUser,
    statusWithAuthUser,
    setStatusWithAuthUser,
    profileFriends,
}) {
    const mappingObj = {
        AUTH_USER: <AuthUserAction />,
        UNKNOWN: (
            <UnKnownAction setStatusWithAuthUser={setStatusWithAuthUser} />
        ),
        FRIEND: <FriendAction setStatusWithAuthUser={setStatusWithAuthUser} />,
        REQUESTER: (
            <RequesterAction setStatusWithAuthUser={setStatusWithAuthUser} />
        ),
        RECEIVER: (
            <ReceiverAction setStatusWithAuthUser={setStatusWithAuthUser} />
        ),
    };
    return (
        <div className=" max-w-6xl mx-auto flex gap-4 px-4 items-end">
            <div className="-mt-8 ">
                <Avatar
                    className="h-40 outline outline-white outline-[3px]"
                    src={profileUser.profileImage}
                />
            </div>
            <div className="flex-1 mb-2">
                <h2 className="text-2xl font-semibold">
                    {profileUser.firstName} {profileUser.lastName}
                </h2>
                <span className="block text-gray-500 font-medium mb-2">
                    {profileFriends.length} friend
                </span>
                <div className="flex -space-x-3">
                    {profileFriends.map((el) => (
                        <Link key={el.id} to={`/profile/${el.id}`}>
                            <Avatar
                                key={el.id}
                                src={el.profileImage}
                                className="h-8"
                            />
                        </Link>
                    ))}
                </div>
            </div>
            <div>{mappingObj[statusWithAuthUser]}</div>
        </div>
    );
}

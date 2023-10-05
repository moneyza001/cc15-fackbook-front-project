import Avatar from "../../components/Avatar";
import AuthUserAction from "./AuthUserAction";
import FriendAction from "./FriendAction";
import ReceiverAction from "./ReceiverAction";
import RequesterAction from "./RequesterAction";
import UnKnownAction from "./UnKnownAction";

export default function ProfileInfo({ profileUser }) {
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
                    6 friend
                </span>
                <div className="flex -space-x-3">
                    <Avatar className="h-8" />
                    <Avatar className="h-8" />
                    <Avatar className="h-8" />
                    <Avatar className="h-8" />
                    <Avatar className="h-8" />
                    <Avatar className="h-8" />
                </div>
            </div>
            <div>
                <ReceiverAction />
                {/* <RequesterAction /> */}
                {/* <FriendAction /> */}
                {/* <UnKnownAction /> */}
                {/* <AuthUserAction /> */}
            </div>
        </div>
    );
}

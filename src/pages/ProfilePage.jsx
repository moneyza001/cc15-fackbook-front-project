import { useEffect, useState } from "react";
import ProfileCover from "../features/profile/ProfileCover";
import ProfileInfo from "../features/profile/ProfileInfo";
import { useParams } from "react-router-dom";
import axios from "../config/axios";
import { toast } from "react-toastify";
import { useAuth } from "../hook/use-auth";

export default function ProfilePage() {
    const [profileUser, setProfileUser] = useState({});
    const [statusWithAuthUser, setStatusWithAuthUser] = useState("");
    const [profileFriends, setProfileFriends] = useState([]);
    const { profileId } = useParams();

    const { authUser } = useAuth();
    const isAuthUser = authUser.id === +profileId;
    useEffect(() => {
        axios
            .get(`/user/${profileId}`)
            .then((res) => {
                setProfileUser(res.data.user);
                setStatusWithAuthUser(res.data.status);
                setProfileFriends(res.data.friends);
            })
            .catch((err) => {
                toast(err.message);
            });
    }, [profileId]);

    return (
        <div className="shadow pb-6 bg-gradient-to-b from-gray-400 to-white">
            {profileUser ? (
                <>
                    <ProfileCover
                        coverImage={
                            isAuthUser
                                ? authUser.coverImage
                                : profileUser?.coverImage
                        }
                    />
                    <ProfileInfo
                        profileUser={isAuthUser ? authUser : profileUser}
                        statusWithAuthUser={statusWithAuthUser}
                        setStatusWithAuthUser={setStatusWithAuthUser}
                        profileFriends={profileFriends}
                    />
                </>
            ) : (
                <h1 className="text-center p-8 text-3xl font-bold">
                    {" "}
                    404 User Not Found
                </h1>
            )}
        </div>
    );
}

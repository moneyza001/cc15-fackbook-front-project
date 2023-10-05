import { useEffect, useState } from "react";
import ProfileCover from "../features/profile/ProfileCover";
import ProfileInfo from "../features/profile/ProfileInfo";
import { useParams } from "react-router-dom";
import axios from "../config/axios";
import { toast } from "react-toastify";
import { useAuth } from "../hook/use-auth";

export default function ProfilePage() {
    const [profileUser, setProfileUser] = useState({});
    const { profileId } = useParams();

    const { authUser } = useAuth();

    useEffect(() => {
        if (authUser.id === +profileId) {
            setProfileUser(authUser);
        } else {
            axios
                .get(`/user/${profileId}`)
                .then((res) => {
                    setProfileUser(res.data.user);
                })
                .catch((err) => {
                    toast(err.message);
                });
        }
    }, [profileId, authUser]);

    return (
        <div className="shadow pb-6 bg-gradient-to-b from-gray-400 to-white">
            {profileUser ? (
                <>
                    <ProfileCover coverImage={profileUser?.coverImage} />
                    <ProfileInfo profileUser={profileUser} />
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

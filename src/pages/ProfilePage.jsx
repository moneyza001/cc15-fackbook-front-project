import ProfileCover from "../features/profile/ProfileCover";
import ProfileInfo from "../features/profile/ProfileInfo";

export default function ProfilePage() {
    return (
        <div className="shadow pb-6 bg-gradient-to-b from-gray-400 to-white">
            <ProfileCover />
            <ProfileInfo />
        </div>
    );
}

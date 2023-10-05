import { useState } from "react";
import Avatar from "../../components/Avatar";
import { useAuth } from "../../hook/use-auth";
import CoverImage from "./CoverImage";
import PictureForm from "./PictureForm";
import Loading from "../../components/Loading";

export default function EditeProfileForm({ onSuccess }) {
    const [loading, setLoading] = useState(false);
    const { authUser, updateProfile } = useAuth();

    const uploadProfileImage = async (input) => {
        try {
            const formData = new FormData();
            formData.append("profileImage", input);
            setLoading(true);
            await updateProfile(formData);
            onSuccess();
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const uploadCoverImage = async (input) => {
        try {
            const formData = new FormData();
            formData.append("coverImage", input);
            setLoading(true);
            await updateProfile(formData);
            onSuccess();
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col gap-4">
            {loading && <Loading />}
            <PictureForm
                title="Profile picture"
                initialSrc={authUser.profileImage}
                onSave={uploadProfileImage}
            >
                {(src, onClick) => (
                    <div onClick={onClick}>
                        <Avatar className="h-40" src={src} />
                    </div>
                )}
            </PictureForm>
            <PictureForm
                title="Cover photo"
                initialSrc={authUser.coverImage}
                onSave={uploadCoverImage}
            >
                {(src, onClick) => (
                    <div
                        className="aspect-[3/1] overflow-hidden rounded-md flex items-center justify-center"
                        onClick={onClick}
                    >
                        <CoverImage src={src} />
                    </div>
                )}
            </PictureForm>
        </div>
    );
}

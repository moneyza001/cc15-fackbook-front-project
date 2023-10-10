import { useRef, useState } from "react";
import { useAuth } from "../../hook/use-auth";
import { ImageIcon } from "../../icons";
import Loading from "../../components/Loading";

export default function PostForm({ onSuccess, onSubmit }) {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const { authUser } = useAuth();
    const fileElement = useRef(null);

    const handdleSubmitForm = async (e) => {
        try {
            e.preventDefault();
            const formData = new FormData();
            if (file) {
                formData.append("image", file);
            }
            if (message) {
                formData.append("message", message);
            }
            setLoading(true);
            onSubmit(formData);
            onSuccess();
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {loading && <Loading />}
            <form className="flex flex-col gap-4" onSubmit={handdleSubmitForm}>
                <textarea
                    className="block w-full outline-none resize-none"
                    rows="6"
                    placeholder={`What's on your mind, ${authUser.firstName}`}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />

                {file ? (
                    <div
                        onClick={() => fileElement.current.click()}
                        className="cursor-pointer "
                    >
                        <img src={URL.createObjectURL(file)} alt="post" />
                    </div>
                ) : (
                    <SelectImageButton
                        onClick={() => fileElement.current.click()}
                    />
                )}
                <input
                    type="file"
                    className="hidden"
                    ref={fileElement}
                    onChange={(e) => {
                        if (e.target.files[0]) {
                            setFile(e.target.files[0]);
                        }
                    }}
                />
                <CreateButton>Post</CreateButton>
            </form>
        </>
    );
}

function CreateButton({ children }) {
    return (
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 w-full rounded-lg font-semibold">
            {children}
        </button>
    );
}

function SelectImageButton({ onClick }) {
    return (
        <div
            className="bg-gray-100 hover:bg-gray-200 rounded-lg flex flex-col items-center py-14 cursor-pointer gap-2"
            onClick={onClick}
        >
            <div className="bg-gray-300 h-10 aspect-square rounded-full flex items-center justify-center">
                <ImageIcon />
            </div>
            <span>Add photo</span>
        </div>
    );
}

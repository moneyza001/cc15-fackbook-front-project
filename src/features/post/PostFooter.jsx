import { MessageIcon, ThumbsUpAltIcon, ThumbsUpIcon } from "../../icons";
import ActionButton from "./ActionButton";
import { useAuth } from "../../hook/use-auth";
import axios from "../../config/axios";
import { useState } from "react";

export default function PostFooter({ postObj }) {
    const { id } = postObj;
    const { authUser } = useAuth();
    const [likes, setLikes] = useState(postObj.likes);

    const isLiked = likes.find((el) => el.userId === authUser.id);

    const handdleClickLike = async () => {
        try {
            await axios.post(`/post/${id}/like`);
            if (isLiked) {
                return setLikes(
                    likes.filter((el) => el.userId !== authUser.id)
                );
            }
            setLikes([...likes, { userId: authUser.id }]);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <div className="flex pb-2 justify-between items-center">
                {likes.length > 0 && (
                    <div className="flex gap-1 items-center">
                        <div className="bg-blue-500 h-5 w-5 rounded-full flex items-center justify-center">
                            <ThumbsUpIcon />
                        </div>
                        <span className="text-sm text-gray-500">
                            {likes.length}
                        </span>
                    </div>
                )}
                <span className="text-sm text-gray-500 hover:underline cursor-pointer">
                    8 comments
                </span>
            </div>

            <hr />

            <div className="flex gap-2 py-1">
                <ActionButton active={isLiked} onClick={handdleClickLike}>
                    <div className="flex gap-2 justify-center">
                        <ThumbsUpAltIcon
                            className={
                                isLiked ? "fill-blue-500" : "fill-gray-500"
                            }
                        />
                        <span>Like</span>
                    </div>
                </ActionButton>

                <ActionButton onClick={() => {}}>
                    <div className="flex gap-2 justify-center items-center">
                        <MessageIcon className="fill-gray-500" />
                        <span>Comment</span>
                    </div>
                </ActionButton>
            </div>
        </div>
    );
}

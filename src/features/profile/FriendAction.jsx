import { useParams } from "react-router-dom";
import ActionButton from "./ActionButton";
import axios from "../../config/axios";
import { UNKNOWN } from "../../config/constant";

export default function FriendAction({ setStatusWithAuthUser }) {
    const { profileId } = useParams();

    const handdleClickUnfriend = async () => {
        try {
            await axios.delete(`/friend/${profileId}/unfriend`);
            setStatusWithAuthUser(UNKNOWN);
        } catch (error) {
            console.log(error);
        }
    };

    return <ActionButton onClick={handdleClickUnfriend}>Unfriend</ActionButton>;
}

import { useParams } from "react-router-dom";
import ActionButton from "./ActionButton";
import axios from "../../config/axios";
import { REQUESTER } from "../../config/constant";

export default function UnKnownAction({ setStatusWithAuthUser }) {
    const { profileId } = useParams();

    const handleClickAddFriend = async () => {
        try {
            await axios.post(`/friend/${profileId}`);
            setStatusWithAuthUser(REQUESTER);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <ActionButton onClick={handleClickAddFriend}>Add friend</ActionButton>
    );
}

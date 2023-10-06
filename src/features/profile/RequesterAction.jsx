import { useParams } from "react-router-dom";
import ActionButton from "./ActionButton";
import axios from "../../config/axios";
import { UNKNOWN } from "../../config/constant";

export default function RequesterAction({ setStatusWithAuthUser }) {
    const { profileId } = useParams();

    const handdleClickCancle = async () => {
        try {
            await axios.delete(`/friend/${profileId}/cancel`);
            setStatusWithAuthUser(UNKNOWN);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <ActionButton onClick={handdleClickCancle}>Cancel request</ActionButton>
    );
}

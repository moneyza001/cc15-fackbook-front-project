import { useParams } from "react-router-dom";
import ActionButton from "./ActionButton";
import axios from "../../config/axios";
import { FRIEND, UNKNOWN } from "../../config/constant";

export default function ReceiverAction({ setStatusWithAuthUser }) {
    const { profileId } = useParams();
    const handdleClickAccept = async () => {
        try {
            await axios.patch(`/friend/${profileId}`);
            setStatusWithAuthUser(FRIEND);
        } catch (error) {
            console.log(error);
        }
    };

    const handdleReject = async () => {
        try {
            await axios.delete(`/friend/${profileId}/reject`);
            setStatusWithAuthUser(UNKNOWN);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="flex gap-6">
            <ActionButton onClick={handdleClickAccept}>Accept</ActionButton>
            <ActionButton onClick={handdleReject}>Reject</ActionButton>
        </div>
    );
}

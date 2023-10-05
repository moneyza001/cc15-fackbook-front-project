import ActionButton from "./ActionButton";

export default function ReceiverAction() {
    return (
        <div className="flex gap-6">
            <ActionButton onClick={() => {}}>Accept</ActionButton>
            <ActionButton onClick={() => {}}>Reject</ActionButton>
        </div>
    );
}

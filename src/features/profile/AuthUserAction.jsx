import { PenIcon } from "../../icons";
import ActionButton from "./ActionButton";
import { useState } from "react";
import Modal from "../../components/Modal";
import EditeProfileForm from "./EditeProfileForm";

export default function AuthUserAction() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <ActionButton onClick={() => setIsOpen(true)}>
                <PenIcon />
                <span className="font-medium">Edit profile</span>
            </ActionButton>
            <Modal
                isOpen={isOpen}
                title="Edit profile"
                onClose={() => setIsOpen(false)}
                maxWidth={44}
            >
                <EditeProfileForm onSuccess={() => setIsOpen(false)} />
            </Modal>
        </div>
    );
}

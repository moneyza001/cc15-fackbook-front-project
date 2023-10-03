import { useRef, useState } from "react";
import FormButton from "./FormButton";

export default function PictureForm({ title, children, src }) {
    const [file, setFile] = useState(null);
    const inputEl = useRef(null);
    return (
        <div>
            <input
                type="file"
                className="hidden"
                ref={inputEl}
                onChange={(event) => {
                    if (event.target.files[0]) {
                        setFile(event.target.files[0]);
                    }
                }}
            />
            <div className="flex justify-between items-center">
                <h5 className="text-xl font-medium">{title}</h5>
                <div>
                    {file && (
                        <>
                            <FormButton>Save</FormButton>
                            <FormButton
                                onClick={() => {
                                    inputEl.current.value = "";
                                    setFile(null);
                                }}
                            >
                                Cancel
                            </FormButton>
                        </>
                    )}
                    <FormButton onClick={() => inputEl.current.click()}>
                        Edit
                    </FormButton>
                </div>
            </div>
            <div className="flex justify-center">
                {children(file ? URL.createObjectURL(file) : undefined)}
            </div>
        </div>
    );
}

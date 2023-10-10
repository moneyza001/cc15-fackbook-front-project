import { useEffect, useRef, useState } from "react";

function useDropdown() {
    const [isOpen, setIsOpen] = useState(false);

    const dropDownEl = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!dropDownEl.current?.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);
    return { dropDownEl, isOpen, setIsOpen };
}

export default useDropdown;

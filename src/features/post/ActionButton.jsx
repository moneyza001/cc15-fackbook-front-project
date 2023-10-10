export default function ActionButton({ children, onClick, active }) {
    return (
        <button
            onClick={onClick}
            className={`py-1.5 text-sm font-medium w-full rounded-md hover:bg-slate-200 
            ${active ? "text-blue-600" : "text-gray-500"}`}
        >
            {children}
        </button>
    );
}

import defaultImgae from "../assets/blank.png";

export default function Avatar({ className = "h-10", src = defaultImgae }) {
    const defaultClass = "rounded-full aspect-square";
    const classes = defaultClass + " " + className;
    return <img src={src} alt="user" className={classes} />;
}

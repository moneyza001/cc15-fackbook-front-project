import defaultImage from "../../assets/cover.jpg";

export default function CoverImage({ src }) {
    return <img src={src || defaultImage} alt="cover" />;
}

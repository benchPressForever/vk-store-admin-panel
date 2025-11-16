import { useNavigate } from "react-router";
import "./InfoStyle.css";
interface InfoProps {
    title: string;
    description: string;
    imageUrl: string;
    width: number;
    height: number;
    navigateTo: string;
}

export function Info({title, description, imageUrl, width, height, navigateTo}: InfoProps) {
    const navigate = useNavigate();

    return(
        <div className="cartEmpty">
            <img width={`${width}px`} height={`${height}px`} src={imageUrl} alt="Empty" />
            <h2>{description}</h2>
            <p style={{opacity:"0.6",fontSize:"14px"}}>{title}</p>
            <button onClick={() => navigate(navigateTo)} >
                перейти
            </button>
        </div>
    )
}
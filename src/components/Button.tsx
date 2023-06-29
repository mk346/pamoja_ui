import Styles from "./Button.module.css";

interface ButtonProps {
    text: string;
}

function Button({ text }: ButtonProps) {
    return <button className={Styles.btn}>{text}</button>;
}

export default Button;

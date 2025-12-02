interface ButtonProps {
    btnName: string;
    btnType?: "button" | "submit" | "reset";
    onClick?: (() => Promise<void>)| (() => void);
}

function Button({btnName, btnType = "button", onClick}: ButtonProps) {
    return (
        <button type={btnType} className="btn btn-block" onClick={onClick}>{btnName}</button>
    );
}

export default Button;
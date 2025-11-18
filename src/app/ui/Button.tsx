interface ButtonProps {
    btnName: string;
    btnType?: "button" | "submit" | "reset";
}

function Button({btnName, btnType = "button"}: ButtonProps) {
    return (
        <button type={btnType} className="btn btn-block">{btnName}</button>
    );
}

export default Button;
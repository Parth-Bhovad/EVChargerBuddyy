interface ButtonProps {
    btnName: string;
    btnType?: "button" | "submit" | "reset";
    onClick?: (() => Promise<void>)| (() => void);
}

function Button({btnName, btnType = "button", onClick}: ButtonProps) {
    return (
        <button type={btnType} className="btn btn-block rounded-box font-bold text-[var(--brand-color-white)]" onClick={onClick}>{btnName}</button>
    );
}

export default Button;
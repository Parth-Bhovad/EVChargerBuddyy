import Loading from "./Loading";

interface ButtonProps {
    btnName: string;
    btnType?: "button" | "submit" | "reset";
    onClick?: (() => Promise<void>) | (() => void);
    loading?: boolean;
}

function Button({ btnName, btnType = "button", onClick, loading = false }: ButtonProps) {
    return (
        <button
            type={btnType}
            className="btn btn-block rounded-box font-bold text-[var(--brand-color-white)]"
            onClick={onClick}
            >

            {loading ? <Loading /> : btnName}
        </button>
    );
}

export default Button;
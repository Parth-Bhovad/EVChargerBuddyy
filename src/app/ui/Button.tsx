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
            className="btn btn-block bg-[var(--brand-color-black)] hover:bg-gray-800 text-white font-semibold py-3 rounded-xl transition-all duration-200 hover:shadow-lg disabled:opacity-50"
            onClick={onClick}
            disabled={loading}
        >
            {loading ? <Loading /> : btnName}
        </button>
    );
}

export default Button;
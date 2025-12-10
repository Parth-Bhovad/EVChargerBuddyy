function EmailInput() {
    return (
        <>
            <label className="input validator bg-[var(--brand-color-white)] text-[var(--brand-color-black)] border border-base-300 rounded-box flex items-center gap-2">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                    >
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </g>
                </svg>
                <input type="email" placeholder="mail@site.com" required name="email" />
            </label>
            <div className="validator-hint hidden">Enter valid email address</div>
        </>
    );
}

export default EmailInput;
interface ButtonPropTypes {
    name: JSX.Element | string;
    className?: string;
    onClick?: () => void;
    icon?: JSX.Element;
    disabled?: boolean;
    dataCy?: string
}

export const FilledButton = ({
    onClick,
    name,
    icon,
    className,
    disabled,
    dataCy
}: ButtonPropTypes) => {
    return (
        <button
            data-cy={dataCy}
            role="button"
            onClick={onClick}
            style={{
                padding: "0.5rem 1rem",
                borderRadius: "8px",
            }}
            className={`flex text-[14px] items-center justify-center gap-2 font-semibold border-none rounded-[8px] ${className} `}
            disabled={disabled}
        >
            {icon} {name}
        </button>
    );
};
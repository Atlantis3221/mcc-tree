import './style.css';

interface AppButtonProps {
    onClick?(e?: Event): void;
    className?: string;
    text?: string;
}

export function AppButton(props: AppButtonProps) {
    const {
        text,
    } = props;

    return (
        <button
            onClick={props.onClick}
        >
            <p>
                {text}
            </p>
        </button>
    )
}
import "./style.css";

interface AppButtonProps {
  onClick?: () => void;
  className?: string;
  text?: string;
}

export function AppButton(props: AppButtonProps) {
  const { onClick, text } = props;

  return (
    <button onClick={onClick}>
      <span>{text}</span>
    </button>
  );
}

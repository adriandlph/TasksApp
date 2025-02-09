interface ButtonProps {
  text?: string;
  type?: string; // main, secondary, other
  disabled?: boolean;
  onClick?: { (): void };
}

function Button(props: ButtonProps) {
  const { text, type, disabled, onClick } = props;

  let buttonTheme;

  switch (type) {
    case "main":
      buttonTheme = disabled
        ? "bg-button-bg-main dark:bg-button-bg-main-dark"
        : "bg-button-bg-main hover:bg-button-bg-main-hover active:bg-button-bg-main-active dark:bg-button-bg-main-dark dark:hover:bg-button-bg-main-dark-hover dark:active:bg-button-bg-main-dark-active";
      break;
    case "secondary":
      buttonTheme = disabled
        ? "bg-button-bg-secondary dark:bg-button-bg-secondary-dark"
        : "bg-button-bg-secondary hover:bg-button-bg-secondary-hover active:bg-button-bg-secondary-active dark:bg-button-bg-secondary-dark dark:hover:bg-button-bg-secondary-dark dark:active:bg-button-bg-secondary-dark-active";
      break;
    case "delete":
      buttonTheme = disabled
        ? "bg-button-bg-delete dark:bg-button-bg-delete-dark"
        : "bg-button-bg-delete hover:bg-button-bg-delete-hover active:bg-button-bg-delete-active dark:bg-button-bg-delete-dark dark:hover:bg-button-bg-delete-dark-hover dark:active:bg-button-bg-delete-dark-active";
      break;
    case "other":
    default:
      buttonTheme = disabled
        ? "bg-button-bg-other dark:bg-button-bg-other-dark"
        : "bg-button-bg-other hover:bg-button-bg-other-hover active:bg-button-bg-other-active dark:bg-button-bg-other-dark dark:hover:bg-button-bg-other-dark-hover dark:active:bg-button-bg-other-dark-active";
      break;
  }

  const opacity = disabled ? "opacity-75" : "opacity-100";

  const className = "px-4 py-2 rounded-lg block " + buttonTheme + " " + opacity;

  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        if (!disabled && onClick) {
          onClick();
        }
      }}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default Button;

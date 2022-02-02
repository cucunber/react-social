import s from "./styles.module.scss";

const Button = ({text, theme="yellow", className="", disabled=false, textTransform="uppercase"}) => {

  return (
    <button
      type="button"
      disabled={disabled}
      style={{
          textTransform
      }}
      className={`${s.button} ${s[theme]} ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
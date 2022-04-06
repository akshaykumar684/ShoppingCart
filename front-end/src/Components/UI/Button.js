import Styles from "./Button.module.css";

const Button = ({ title, onClickHandler, btnType }) => {
  return (
    <button
      type={btnType || ""}
      className={Styles.btn}
      onClick={onClickHandler}
    >
      {title}
    </button>
  );
};

export default Button;

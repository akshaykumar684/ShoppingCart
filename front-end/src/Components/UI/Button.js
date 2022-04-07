import Styles from "./Button.module.css";

const Button = ({ title, onClickHandler, btnType, isdisabled = false }) => {
  return (
    <button
      disabled={isdisabled}
      type={btnType || ""}
      className={Styles.btn}
      onClick={onClickHandler}
    >
      {title}
    </button>
  );
};

export default Button;

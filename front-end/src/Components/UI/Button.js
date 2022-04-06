import Styles from "./Button.module.css";

const Button = ({ title, onClickHandler }) => {
  return (
    <button className={Styles.btn} onClick={onClickHandler}>
      {title}
    </button>
  );
};

export default Button;

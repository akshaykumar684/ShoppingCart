import Styles from "./CrossCloseButton.module.css";
import close from "../../../Resources/Images/Close-256.png";

const CrossCloseButton = ({ onCloseHandler }) => {
  return (
    <button className={Styles.closeBtn} onClick={onCloseHandler}>
      <img src={close} alt="close" className="closeImg" />
    </button>
  );
};

export default CrossCloseButton;

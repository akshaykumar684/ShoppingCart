import Styles from "./LogoutButton.module.css";

const LogOutButton = ({ onLogoutClickHandler }) => {
  return (
    <button className={Styles.logOutButton} onClick={onLogoutClickHandler}>
      Logout
    </button>
  );
};

export default LogOutButton;

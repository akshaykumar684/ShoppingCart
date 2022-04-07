import "./RoundButton.css";

const RoundButton = ({ content, onClickHanlder }) => {
  return (
    <button className="add-remove-button" onClick={onClickHanlder}>
      {content}
    </button>
  );
};

export default RoundButton;

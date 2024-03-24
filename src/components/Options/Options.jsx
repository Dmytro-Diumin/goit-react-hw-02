import style from "../Options/Options.module.css";

const Options = ({ updateFeedback, handleResetFeedback, totalFeedback }) => {
  const handleFeedbackUpdate = (feedbackType) => {
    updateFeedback(feedbackType);
  };

  return (
    <div>
      <button
        className={style.btn}
        onClick={() => handleFeedbackUpdate("good")}
      >
        Good
      </button>
      <button
        className={style.btn}
        onClick={() => handleFeedbackUpdate("neutral")}
      >
        Neutral
      </button>
      <button className={style.btn} onClick={() => handleFeedbackUpdate("bad")}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={style.btn} onClick={handleResetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;

import { useState, useEffect } from "react";
import Notification from "./components/Notification/Notification";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import "./App.css";

function App() {
  const initialFeedback = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem("feedback");
    return savedFeedback ? JSON.parse(savedFeedback) : initialFeedback;
  });

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positivePercentage = Math.round(
    (feedback.good / totalFeedback) * 100 || 0
  );

  const resetFeedback = () => {
    setFeedback(initialFeedback);
    localStorage.setItem("feedback", JSON.stringify(initialFeedback));
  };
  return (
    <>
      <Description></Description>
      <Options
        updateFeedback={updateFeedback}
        handleResetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      ></Options>
      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positivePercentage={positivePercentage}
        />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </>
  );
}

export default App;

import { useEffect, useState } from "react";
import "./playscreen.scss";
import Quiz from "../Quiz/Quiz";
import Loader from "../../Loader/Loader";

function PlayScreen() {
  const [quizzes, setQuizzes] = useState([]);
  const [showAnswer, setShowAnswer] = useState(false);
  const [loading, setLoading] = useState(false);
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
  const apiUrl = "https://opentdb.com/api.php?amount=10&type=multiple";

  useEffect(() => {
    fetchQuizzesFromApi(apiUrl);
  }, []);

  function fetchQuizzesFromApi(url) {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let temp = data.results;
        temp = temp.map((item) => ({ ...item, selected_answer: "" }));
        setQuizzes(temp);
        setLoading(false);
      });
  }

  const handleSelectAnswer = (answer, correctAnswer) => {
    let temp = quizzes;
    temp = temp.map((item) => ({
      ...item,
      selected_answer:
        correctAnswer === item.correct_answer ? answer : item.selected_answer,
    }));
    setQuizzes(temp);
  };

  function checkAnswers() {
    setShowAnswer((prevState) => !prevState);
    if (showAnswer){
      fetchQuizzesFromApi(apiUrl);
      return;
    }
    let count = 0;
    quizzes.forEach((quiz) => {
      if (quiz.correct_answer === quiz.selected_answer) {
        count++;
      }
    });
    setCorrectAnswerCount(count);
  }

  return (
    <>
      {loading && <Loader />}
      <div className="play-screen">
        <div className="quizzes">
          {quizzes.map((quiz, idx) => (
            <Quiz
              key={idx}
              index={idx}
              quiz={quiz}
              finished={showAnswer}
              selectedAnswer={quiz.selected_answer}
              onSelectAnswer={handleSelectAnswer}
            />
          ))}
        </div>
        <div className="result">
          {showAnswer && (
            <div>
              You scored {correctAnswerCount}/{quizzes.length} correct answers
            </div>
          )}
          <button onClick={checkAnswers} className="btn">
            {!showAnswer ? "Check answers" : "Play again"}
          </button>
        </div>
      </div>
    </>
  );
}

export default PlayScreen;

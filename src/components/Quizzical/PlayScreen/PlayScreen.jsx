import { useEffect, useState } from "react";
import "./playscreen.scss";
import Quiz from "../Quiz/Quiz";
import Loader from "../../Loader/Loader";

function PlayScreen() {
  const [quizzes, setQuizzes] = useState([]);
  const [showAnswer, setShowAnswer] = useState(false);
  const [loading, setLoading] = useState(false);
  const apiUrl = "https://opentdb.com/api.php?amount=10&type=multiple";

  useEffect(() => {
    fetchQuizzesFromApi(apiUrl);
  }, []);

  function fetchQuizzesFromApi(url) {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setQuizzes(data.results);
        setLoading(false);
      });
  }

  console.log(quizzes);

  return (
    <>
      {loading && <Loader />}
      <div className="play-screen">
        <div className="quizzes">
          {quizzes.map((quiz, idx) => (
            <Quiz key={idx} index={idx} quiz={quiz} />
          ))}
        </div>
        <div className="result">
          {showAnswer && (
            <div>You scored 0/{quizzes.length} correct answers</div>
          )}
          <button
            onClick={() => setShowAnswer((prevState) => !prevState)}
            className="btn"
          >
            {!showAnswer ? "Check answers" : "Play again"}
          </button>
        </div>
      </div>
    </>
  );
}

export default PlayScreen;

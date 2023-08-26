import { useState } from "react";
import "./quiz.scss";

function Quiz(props) {
  const quiz = props.quiz;
  const [selectedAnswer, setSelectedAnswer] = useState("");

  function handleSelectAnswer(answer) {

  }

  return (
    <div className="quiz">
      <h3>
        {props.index + 1}. {quiz.question}
      </h3>
      <div className="answers">
        <div onClick={() => setSelectedAnswer(quiz.correct_answer)} className={`answer ${selectedAnswer === quiz.correct_answer ? 'active' : ''}`}>{quiz.correct_answer}</div>
        {quiz.incorrect_answers.map((answer) => (
          <div onClick={() => setSelectedAnswer(answer)} className={`answer ${selectedAnswer === answer ? 'active' : ''}`}>{answer}</div>
        ))}
      </div>
    </div>
  );
}

export default Quiz;

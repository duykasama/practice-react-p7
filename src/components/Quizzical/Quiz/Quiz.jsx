import { useEffect, useState } from "react";
import "./quiz.scss";

function Quiz(props) {
  const quiz = props.quiz;
  const [answers, setAnswers] = useState([]);
  useEffect(() => {
    // answers.push(quiz.correct_answer);
    if (answers.length === 0) {
      setAnswers((prevAnswers) => {
        let temp = answers;
        quiz.incorrect_answers.forEach((answer) => temp.push(answer));
        // temp.push(quiz.incorrect_answers);
        temp.push(quiz.correct_answer);
        return temp.sort((a, b) => Math.random() - 0.5);
        // return temp;
      });
    }
    // answers = answers.sort((a, b) => Math.random() - 0.5);
    console.log(answers);
  }, [answers, quiz]);
  console.log(answers);

  return (
    <div className="quiz">
      <h3>
        {props.index + 1}. {quiz.question}
      </h3>
      <div className="answers">
        {answers.map((answer, idx) => (
          <div
            key={idx}
            onClick={() => props.onSelectAnswer(answer, quiz.correct_answer)}
            className={`answer${
              props.selectedAnswer === answer ? " active" : ""
            }`}
          >
            {answer}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Quiz;

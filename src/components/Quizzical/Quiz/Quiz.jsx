import { useEffect, useState } from "react";
import "./quiz.scss";

function Quiz(props) {
  const quiz = props.quiz;
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    let temp = [];
    quiz.incorrect_answers.forEach((answer) => temp.push(answer));
    temp.push(quiz.correct_answer);
    if (isIdenticalArray(answers, temp)) {
      return;
    }
    setAnswers(() => {
      return temp.sort((a, b) => Math.random() - 0.5);
    });
  }, [quiz]);

  function isIdenticalArray(arr1, arr2) {
    if (arr1.length != arr2.length) {
      return false;
    }
    return arr1.every((e) => arr2.includes(e));
  }

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
            }${
              props.finished &&
              quiz.correct_answer === answer &&
              quiz.selected_answer != answer
                ? " missed"
                : quiz.selected_answer === answer ? " correct" : ""
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

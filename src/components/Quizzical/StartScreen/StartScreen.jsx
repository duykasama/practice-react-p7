import "./startscreen.scss";

function StartScreen(props) {
  return (
    <div className="start-screen">
      <h2 className="title">Quizzical</h2>
      <p>Some description if needed</p>
      <button onClick={props.onStart} className="btn">
        Start quiz
      </button>
    </div>
  );
}

export default StartScreen;

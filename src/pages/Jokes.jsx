import Joke from "../components/Joke/Joke";
import jokes from "../jokes.json";

function Jokes() {
  return (
    <main className="joke-container">
      {jokes.map((joke) => (
        <Joke key={joke.id} setup={joke.setup} punchline={joke.punchline} />
      ))}
    </main>
  );
}

export default Jokes;

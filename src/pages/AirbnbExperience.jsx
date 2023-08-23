import Header from "../components/Airbnb/Header/Header";
import Main from "../components/Airbnb/Main/Main";
import Hero from "../components/Airbnb/Hero/Hero";
import data from "../experiences.json";

function AirbnbExperience() {
  return (
    <main className="airbnb--main">
      <Header />
      <Hero />
      <Main props={data} />
    </main>
  );
}

export default AirbnbExperience;

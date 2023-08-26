import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import BoxChallenge from "../../pages/BoxChallenge";
import Jokes from "../../pages/Jokes";
import FormPractice from "../../pages/FormPractice";
import SignUpSuccess from "../../pages/SignUpSuccess";
import DigitalCard from "../../pages/DigitalCard";
import AirbnbExperience from "../../pages/AirbnbExperience";
import TravelJournal from "../../pages/TravelJournal";
import PageNotFound from "../../pages/PageNotFound";
import MemeGenerator from "../../pages/MemeGenerator";
import StarWarsWiki from "../../pages/StarWarsWiki";
import ReactFacts from "../../pages/ReactFacts";
import Tenzies from "../../pages/Tenzies";
import Quizzical from "../../pages/Quizzical";
import DemoLocalStorage from "../../pages/DemoLocalStorage";
import DemoApi from "../../pages/DemoApi";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/react-facts" element={<ReactFacts />} />
      <Route path="/box-challenge" element={<BoxChallenge />} />
      <Route path="/jokes" element={<Jokes />} />
      <Route path="/form-practice" element={<FormPractice />} />
      <Route path="/signup-success" element={<SignUpSuccess />} />
      <Route path="/digital-card" element={<DigitalCard />} />
      <Route path="/airbnb-experience" element={<AirbnbExperience />} />
      <Route path="/travel-journal" element={<TravelJournal />} />
      <Route path="/meme-generator" element={<MemeGenerator />} />
      <Route path="/starwars-wiki" element={<StarWarsWiki />} />
      <Route path="/tenzies" element={<Tenzies />} />
      <Route path="/quizzical" element={<Quizzical />}></Route>
      <Route path="/demo-local-storage" element={<DemoLocalStorage />} />
      <Route path="/demo-api" element={<DemoApi />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Router;

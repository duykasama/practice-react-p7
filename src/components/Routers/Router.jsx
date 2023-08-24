import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import BoxChallenge from "../../pages/BoxChallenge";
import Jokes from "../../pages/Jokes";
import FormPractice from "../../pages/FormPractice";
import SignUpSuccess from "../../pages/SignUpSuccess";
import DigitalCard from "../../pages/DigitalCard";
import AirbnbExperience from "../../pages/AirbnbExperience";
import TravelJournal from "../../pages/TravelJournal";
import Loader from "../Loader/Loader";
import PageNotFound from "../../pages/PageNotFound";
import MemeGenerator from "../../pages/MemeGenerator";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/box-challenge" element={<BoxChallenge />} />
      <Route path="/jokes" element={<Jokes />} />
      <Route path="/form-practice" element={<FormPractice />} />
      <Route path="/signup-success" element={<SignUpSuccess />} />
      <Route path="/digital-card" element={<DigitalCard />} />
      <Route path="/airbnb-experience" element={<AirbnbExperience />} />
      <Route path="/travel-journal" element={<TravelJournal />} />
      <Route path="/meme-generator" element={<MemeGenerator />} />
      <Route path="/test" element={<Loader />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Router;

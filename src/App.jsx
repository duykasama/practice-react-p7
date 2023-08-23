import "./App.scss";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BoxChallenge from "./pages/BoxChallenge";
import Jokes from "./pages/Jokes";
import Footer from "./components/Footer/Footer";
import FormPractice from "./pages/FormPractice";
import SignUpSuccess from "./pages/SignUpSuccess";
import Loader from "./components/Loader/Loader";
import PageNotFound from "./pages/PageNotFound";
import DigitalCard from "./pages/DigitalCard";
import AirbnbExperience from "./pages/AirbnbExperience";
import TravelJournal from "./pages/TravelJournal";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/box-challenge" element={<BoxChallenge />} />
        <Route path="/jokes" element={<Jokes />} />
        <Route path="/form-practice" element={<FormPractice />} />
        <Route path="/signup-success" element={<SignUpSuccess />} />
        <Route path="/digital-card" element={<DigitalCard />} />
        <Route path="/airbnb-experience" element={<AirbnbExperience />} />
        <Route path="/travel-journal" element={<TravelJournal />} />
        <Route path="/test" element={<Loader />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

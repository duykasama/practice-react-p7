import "./App.css";
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
        <Route path="/test" element={<Loader />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

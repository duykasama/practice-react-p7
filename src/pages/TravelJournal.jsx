import journals from "../journals.json";
import Header from "../components/TravelJournal/Header/Header";
import Main from "../components/TravelJournal/Main/Main";

function TravelJournal() {
  return (
    <>
      <main className="travel-journal-container">
        <Header />
        <Main journals={journals} />
      </main>
    </>
  );
}

export default TravelJournal;

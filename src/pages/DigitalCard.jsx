import CardFooter from "../components/DigitalCardComponents/CardFooter/CardFooter";
import CardMain from "../components/DigitalCardComponents/CardMain/CardMain";

function DigitalCard() {
  return (
    <main className="card-container">
      <div className="card-content">
      <CardMain />
      <CardFooter />
      </div>
    </main>
  );
}

export default DigitalCard;

import Journal from '../Journal/Journal';
import './main.scss';

function Main(props) {
    return ( 
        <section className="main">
            { props.journals.map(item => <Journal journalObject={item} />) }
  
        </section>
     );
}

export default Main;

import './main.scss';

function Main(props) {
    return ( <section>
        {JSON.stringify(props.content, null, 1)}
    </section> );
}

export default Main;
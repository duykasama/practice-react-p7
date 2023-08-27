import "./loader.scss";

function Loader(props) {
  return (
    <div className="loader">
      <h1>{props.title}</h1>
      <div className="circle"></div>
    </div>
  );
}

export default Loader;

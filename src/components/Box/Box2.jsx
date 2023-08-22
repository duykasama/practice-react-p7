import "./box.scss";

function Box2(props) {
  const styles = {
    backgroundColor: props.box.on ? "#242424" : "#DFDFDF",
  };
  return <div onClick={() => props.boxClick(props.box)} style={styles} className="box"></div>;
}

export default Box2;

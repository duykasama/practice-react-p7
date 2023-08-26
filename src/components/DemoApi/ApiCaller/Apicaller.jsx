import { useState } from "react";
import "./apicaller.scss";

function ApiCaller(props) {
    const [url, setUrl] = useState("");
    const handleChange = (event) => {
        setUrl(event.currentTarget.value)
    }
  return (
    <section>
      <input onChange={handleChange} type="text" />
      <button onClick={() => props.onCallApi(url)}>Send</button>
    </section>
  );
}

export default ApiCaller;

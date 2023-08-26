import { useEffect, useState } from "react";
import ApiCaller from "../components/DemoApi/ApiCaller/Apicaller";
import Main from "../components/DemoApi/Main/Main";

function DemoApi() {
  const [result, setResult] = useState("");
  const callApi = (url) => {
    fetch(url)
    .then(res => res.json())
    .then(data => setResult(data))
  }

  useEffect(() => {
    console.log(result);
  }, [result])


  return (
    <main className="demo-api--main">
      <ApiCaller onCallApi={callApi} onSetResult={setResult} />
      {/* <div>the result is: {JSON.stringify(result, null, 0)}</div> */}
      <Main content={result} />
    </main>
  );
}

export default DemoApi;

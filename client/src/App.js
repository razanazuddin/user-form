import React from "react";
import "./App.css";
import { Form } from "./components/Form";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div>
      <header className="App-header">
        <p>{!data ? "Loading..." : data}</p>
      </header>
      <div className="p-20 bg-slate-50">
        <Form />
      </div>
    </div>
  );
}

export default App;
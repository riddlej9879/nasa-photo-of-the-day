import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then((res) => {
        console.log({ res });
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <h1>Nasa Photo of the day</h1>
      {data ? (
        <>
          <h3 className="title">{data.title}</h3>
          <h3>{data.date}</h3>
          <p>{data.explanation}</p>
          <img src={data.url} alt="Nasa photo of the day" />
        </>
      ) : (
        <h2>Photo data loading</h2>
      )}
    </div>
  );
}

export default App;

// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY

import React, { useState } from "react";
import "./App.css";

function App() {

  const [mood, setMood] = useState("🙂 Neutral");

  const moodData = {
    "😊 Happy": "#ffd93d",
    "😢 Sad": "#74b9ff",
    "😡 Angry": "#ff6b6b",
    "😴 Tired": "#a29bfe",
    "🙂 Neutral": "#dfe6e9"
  };

  return (
    <div 
      className="container"
      style={{ backgroundColor: moodData[mood] }}
    >

      <h1>Mood Tracker</h1>

      <h2>Your Mood: {mood}</h2>

      <div className="buttons">

        <button onClick={() => setMood("😊 Happy")}>
          Happy
        </button>

        <button onClick={() => setMood("😢 Sad")}>
          Sad
        </button>

        <button onClick={() => setMood("😡 Angry")}>
          Angry
        </button>

        <button onClick={() => setMood("😴 Tired")}>
          Tired
        </button>

        <button onClick={() => setMood("🙂 Neutral")}>
          Reset
        </button>

      </div>

    </div>
  );
}

export default App;
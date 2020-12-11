import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "❤️": "love",
  "😑": "annoyance",
  "😗": "kissing",
  "😴": "sleeping",
  "😟": "worried",
  "😕": "confused",
  "😢": "crying",
  "😫": "tired",
  "😠": "angry"
};
var emojiWeKnow = Object.keys(emojiDictionary);
export default function App() {
  const [meaning, setMeaning] = useState("");

  function onChangeHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "Sorry,failure to recognise this emoji";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>emoji family!!</h1>
      <input onChange={() => onChangeHandler(event)}></input>
      <div
        style={{
          padding: "1rem",
          fontSize: "1.5rem",
          color: "brown",
          fontWeight: "900"
        }}
      >
        {meaning}
      </div>
      <h3> emojis we know </h3>
      {emojiWeKnow.map((emoji) => {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{
              padding: "0.5rem 1rem",
              fontSize: "2rem",
              cursor: "pointer"
            }}
          >
            {emoji}
          </span>
        );
      })}
      
    </div>
  );
}

import "./styles.css";
import React, { useState } from "react";
import Editor from "./Components/Editor/Editor";
import PersonalDetails from "./Components/Editor/PersonalDetails";

export default function App() {
  const [Name, setName] = useState("");
  return (
    <div className="App">
      <Editor Name={Name} />
      <PersonalDetails Name={Name} />
    </div>
  );
}

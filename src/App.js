import "./styles.css";
import React, { useState } from "react";
import Editor from "./Components/Editor/Editor";
import PreviewPersonalDetails from "./Components/Preview/PersonalDetails";
import EditorPersonalDetails from "./Components/Editor/PersonalDetails";

export default function App() {
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    age: "",
    address: "",
    aboutMe: ""
  });

  return (
    <div className="App">
      <Editor userDetails={userDetails} />
      <EditorPersonalDetails
        userDetails={userDetails}
        setUserDetails={setUserDetails}
      />
      <PreviewPersonalDetails userDetails={userDetails} />
    </div>
  );
}

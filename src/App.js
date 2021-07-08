import "./styles.css";
import React, { useState } from "react";
import Editor from "./Components/Editor/Editor";
import Preview from "./Components/Preview/Preview";
// import EditorPersonalDetails from "./Components/Editor/PersonalDetails";

export default function App() {
  const [links, setLinks] = useState([{ label: "", url: "" }]);
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    age: "",
    address: "",
    aboutMe: ""
  });

  return (
    <div className="App">
      <Editor
        userDetails={userDetails}
        setUserDetails={setUserDetails}
        links={links}
        setLinks={setLinks}
      />
      <Preview
        userDetails={userDetails}
        setUserDetails={setUserDetails}
        links={links}
        setLinks={setLinks}
      />
    </div>
  );
}

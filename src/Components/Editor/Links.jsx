import React, { useState } from "react";
import styled from "styled-components";

function Links(props) {
  const [isAddField, setIsAddField] = useState("false");
  return (
    <LinksPair
      {...props}
      isAddField={isAddField}
      setIsAddField={setIsAddField}
    />
  );
}
export default Links;

const LinksPair = (props) => {
  const { links, setLinks } = props;

  function handleLabel(e, index) {
    const { links, setIsAddField, isAddField } = props;
    setIsAddField("true");
    if (e.target.name === "label") {
      links[index] = e.target.value;
      // setLinks([{ ...links, label: links[index] }]);
      console.log("label");
    }
    setLinks([{ ...Links, label: links.label }]);
    if (isAddField === "true") {
      console.log("yello");
      setLinks([...links, { label: "", url: "" }]);
      // setLinks([{ ...links }]);
    }
  }
  function handleUrl(e, index) {
    const { links } = props;
    if (e.target.name === "url") {
      links[index] = e.target.value;
    }
    setLinks([{ ...Links, url: links.url }]);
  }
  console.log(links);
  // links is an object

  return links.map((labels, index) => (
    <div key={index}>
      <input
        type="text"
        id="label"
        placeholder="label"
        name="label"
        value={links.label}
        onChange={(e) => handleLabel(e)}
      />
      <input
        type="text"
        id="url"
        placeholder="url"
        name="url"
        value={links.url}
        onChange={(e) => handleUrl(e)}
      />
      {/* {JSON.stringify(links)} */}
    </div>
  ));
};

const LinksContainer = styled.main`
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;
`;

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
    // console.log(e.target.value)
    const { links, setIsAddField, isAddField } = props;
    setIsAddField("true");
    console.log(links[links.length-1])
    if (e.target.name === "label" && e.key=='Enter' ) {
      links[index].label = e.target.value;
     
        setLinks([ ...links, {...links[index].label, label:  e.target.value} ]);
      
      // console.log("label");
    }
    // setLinks([{ ...Links, label: links.label }]);
    // if (isAddField === "true" && e.key=='Enter') {
    //   console.log("yello");
    //   setLinks(prevState => [...prevState, { label: "", url: "" }]);
    //   // setLinks([{ ...links }]);
    // }
  }
  function handleUrl(e, index) {
    const { links } = props;
    if (e.target.name === "url" && e.key=='Enter' ) {
      links[index].url = e.target.value;
      setLinks([ ...links, {...links[index].url, url:  e.target.value} ]);
    setLinks(prevState => [ ...prevState,{ url: links.url} ]);
    }
  }
  console.log(links);


  return links.map((labels, index) => (
    <LinksContainer key={index}>
      <input
        type="text"
        id="label"
        placeholder="label"
        name="label"
        value={links.label}
        onKeyPress={(e) => handleLabel(e, index)}
      />
      <input
        type="text"
        id="url"
        placeholder="url"
        name="url"
        value={links.url}
        onKeyPress={(e) => handleUrl(e)}
      />
     
    </LinksContainer>
  ));
};

const LinksContainer = styled.main`
  display: flex;
  justify-content: space-around;
  margin-top: 0.3rem;
`;

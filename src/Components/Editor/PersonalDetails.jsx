import React from "react";
import Links from "./Links";
import styled from "styled-components";

function PersonalDetails(props) {
  const { userDetails, setUserDetails, links, setLinks } = props;
  function handleFirstName(e) {
    setUserDetails({ ...userDetails, firstName: e.target.value });
  }
  function handleLastName(e) {
    setUserDetails({ ...userDetails, lastName: e.target.value });
  }
  function handleAge(e) {
    setUserDetails({ ...userDetails, age: e.target.value });
  }
  function handleAddress(e) {
    setUserDetails({ ...userDetails, address: e.target.value });
  }
  function handleAboutme(e) {
    setUserDetails({ ...userDetails, aboutMe: e.target.value });
  }

  return (
    <PersonalDetailsContainer>
      <input type="text" placeholder="first name" onChange={handleFirstName} />
      <input type="text" placeholder="last name" onChange={handleLastName} />
      <input type="number" placeholder="age" onChange={handleAge} />
      <input type="text" placeholder="address" onChange={handleAddress} />
      <input type="text" placeholder="about me" onChange={handleAboutme} />
      <Links
        userDetails={userDetails}
        setUserDetails={setUserDetails}
        links={links}
        setLinks={setLinks}
      />
    </PersonalDetailsContainer>
  );
}

export default PersonalDetails;

const PersonalDetailsContainer = styled.div`
display: flex;
flex-direction: column;
margin: 0.2rem 0.2rem;
/* justify-content: end; */
input{
  margin: 15px 1rem;
  padding: 15px 1rem;
  border: none;
  border-bottom: 0.2px solid;
  background: transparent;
}
input:focus{
  outline: none;
  border-color: #F178B6;
}
`;
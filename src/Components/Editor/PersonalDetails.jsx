import React from "react";
function PersonalDetails(props) {
  const { userDetails, setUserDetails } = props;
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
    <>
      <input type="text" placeholder="first name" onChange={handleFirstName} />
      <input type="text" placeholder="last name" onChange={handleLastName} />
      <input type="number" placeholder="age" onChange={handleAge} />
      <input type="text" placeholder="address" onChange={handleAddress} />
      <input type="text" placeholder="about me" onChange={handleAboutme} />
    </>
  );
}

export default PersonalDetails;

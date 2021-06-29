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
  return (
    <>
      <input type="text" placeholder="first name" onChange={handleFirstName} />
      <input type="text" placeholder="last name" onChange={handleLastName} />
      <input type="number" placeholder="age" onChange={handleAge} />
    </>
  );
}

export default PersonalDetails;

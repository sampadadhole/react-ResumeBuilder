function PersonalDetails(props) {
  const { userDetails, setUserDetails } = props;
  console.log(userDetails);
  return (
    <>
      <p>
        {userDetails.firstName}
        {userDetails.lastName}
        {userDetails.age}
      </p>
    </>
  );
}

export default PersonalDetails;

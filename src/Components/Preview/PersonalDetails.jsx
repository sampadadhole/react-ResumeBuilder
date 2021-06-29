function PersonalDetails(props) {
  const { userDetails } = props;
  console.log(userDetails);
  return (
    <>
      <p>
        {userDetails.firstName}
        {userDetails.lastName}
        {userDetails.age}
        {userDetails.address}
        {userDetails.aboutMe}
      </p>
    </>
  );
}

export default PersonalDetails;

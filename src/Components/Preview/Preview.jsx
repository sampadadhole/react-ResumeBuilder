import PersonalDetails from "./PersonalDetails";

function Preview(props) {
  const { userDetails, setUserDetails, links, setLinks } = props;
  return (
    <>
      <PersonalDetails
        userDetails={userDetails}
        setUserDetails={setUserDetails}
        links={links}
        setLinks={setLinks}
      />
    </>
  );
}
export default Preview;

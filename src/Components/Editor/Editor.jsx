import PersonalDetails from "./PersonalDetails";
import Links from "./Links";

function Editor(props) {
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
export default Editor;

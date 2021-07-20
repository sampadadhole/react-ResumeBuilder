import PersonalDetails from "./PersonalDetails";
import Links from "./Links";
import styled from "styled-components";
import React,{useState} from "react"
import WorkExperience from "./WorkExperience"
import Skills from "./Skills"
import ExtraCurricular from "./ExtraCurricular"


function Editor(props) {
  const { userDetails, setUserDetails, links, setLinks , setWorkDetails, WorkDetails } = props;
  const [PersonalDetailsSide, setPersonalDetailsSide] = useState(true);
  const [WorkExpSide, SetWorkExpSide] = useState(false);
  const [SkillsSide, SetSkillsSide] = useState(false);
  const [ExtraCurricularSide, SetExtraCurricularSide] = useState(false);

  function handlePersonalDetails(){
    setPersonalDetailsSide(true)
    SetWorkExpSide(false)
    SetExtraCurricularSide(false)
  }
  function handleWorkExp(){
    SetWorkExpSide(true)
    SetSkillsSide(false)
    SetExtraCurricularSide(false)
  }
  function handleSkills(){
    SetWorkExpSide(false)
    setPersonalDetailsSide(false)
    SetSkillsSide(true)
    SetExtraCurricularSide(false)
  }
  function handleExtaCurricular(){
    SetWorkExpSide(false)
    setPersonalDetailsSide(false)
    SetSkillsSide(false)
    SetExtraCurricularSide(true)
  }
  return (
    <>
    <SideBar>
       <PersonalDetailsSideBar style={{backgroundColor:  PersonalDetailsSide && WorkExpSide==false  && "#F178B6"}}>
         <input type="radio" 
         id = "PersonalDetails"
         name="selection"
         value="PersonalDetails"
         onChange={handlePersonalDetails}/>
         <label for ="PersonalDetails">Personal Details</label>
       </PersonalDetailsSideBar>

       <WorkExpSideBar style={{backgroundColor : WorkExpSide   && SkillsSide==false && "#F178B6" }}>
          <input type="radio" 
         id = "WorkExperience"
         value="WorkExperience"
         name="selection"
         onChange={handleWorkExp}/> 
          <label for="WorkExperience">Work Experience</label>
         </WorkExpSideBar>

         <SkillsSideBar style={{backgroundColor : SkillsSide  && PersonalDetailsSide==false && WorkExpSide==false && ExtraCurricularSide==false && "#F178B6" }}>
          <input type="radio" 
         id = "Skills"
         value="Skills"
         name="selection"
         onChange={handleSkills}/> 
          <label for="Skills">Skills</label>
         </SkillsSideBar>

         <ExtraCurricularSideBar style={{backgroundColor : ExtraCurricularSide  && PersonalDetailsSide==false && WorkExpSide==false && SkillsSide==false  &&"#F178B6" }}>
          <input type="radio" 
         id = "ExtaCurricular"
         value="ExtaCurricular"
         name="selection"
         onChange={handleExtaCurricular}/> 
          <label for="ExtaCurricular">ExtaCurricular</label>
         </ExtraCurricularSideBar>

    </SideBar>
   
    <EditorMapper>
      {PersonalDetailsSide && WorkExpSide==false && <PersonalDetails
        userDetails={userDetails}
        setUserDetails={setUserDetails}
        links={links}
        setLinks={setLinks}
      />}
      {WorkExpSide && <WorkExperience   userDetails={userDetails}
        setUserDetails={setUserDetails}
        links={links}
        setLinks={setLinks}
        WorkDetails={WorkDetails}
        setWorkDetails={setWorkDetails}/>}

        {SkillsSide && <Skills userDetails={userDetails}
        setUserDetails={setUserDetails}
        links={links}
        setLinks={setLinks}
        WorkDetails={WorkDetails}
        setWorkDetails={setWorkDetails}/>}

        {ExtraCurricularSide && <ExtraCurricular userDetails={userDetails}
        setUserDetails={setUserDetails}
        links={links}
        setLinks={setLinks}
        WorkDetails={WorkDetails}
        setWorkDetails={setWorkDetails}/>}
    </EditorMapper>
    </>
  );
}
export default Editor;

const EditorMapper = styled.div`
border: 0.1rem solid #F178B6;
margin: 0 auto;
max-width: 35rem;
height: 40rem;
padding: 2rem 2rem;

`;
const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
 
`;
const PersonalDetailsSideBar = styled.div`
input{
  visibility: hidden;
  pointer-events: none;
  
}
margin: 3rem 9.3rem;
position: relative;
border: 0.1rem solid  #F178B6;

width: 15rem;
height:2rem;
border-radius: 27px 0px 0px 27px;
`;
const WorkExpSideBar = styled.div`
input{
  visibility: hidden;
  pointer-events: none;
  
}
margin: 3rem 9.3rem;
position: relative;
border: 0.1rem solid  #F178B6;
/* background-color: #F178B6; */
width: 15rem;
height:2rem;
border-radius: 27px 0px 0px 27px;
`;

const SkillsSideBar = styled.div`
input{
  visibility: hidden;
  pointer-events: none;
  
}
margin: 3rem 9.3rem;
position: relative;
border: 0.1rem solid  #F178B6;
/* background-color: #F178B6; */
width: 15rem;
height:2rem;
border-radius: 27px 0px 0px 27px;
`;

const ExtraCurricularSideBar = styled.div`
input{
  visibility: hidden;
  pointer-events: none;
  
}
margin: 3rem 9.3rem;
position: relative;
border: 0.1rem solid  #F178B6;
/* background-color: #F178B6; */
width: 15rem;
height:2rem;
border-radius: 27px 0px 0px 27px;
`;
import React from "react";
import Links from "./Links";
import styled from "styled-components";

function WorkExperience(props){
  const { userDetails, setUserDetails, links, setLinks , setWorkDetails, WorkDetails } = props;

  function handleEmployerName(e){
    setWorkDetails({ ...WorkDetails, EmployerName: e.target.value });
    
  }
  function handleRole(e){
    setWorkDetails({ ...WorkDetails, Role: e.target.value });
    
  }
  function handleStartingFromDate(e){
    setWorkDetails({ ...WorkDetails, StartingFrom: e.target.value });
    
  }
  function handleEndDate(e){
    setWorkDetails({ ...WorkDetails, EndDate: e.target.value });
    
  }
  function handlePresentDate(e){
    setWorkDetails({ ...WorkDetails, present: e.target.value });
    
  }
  function handleDescription(e){
    setWorkDetails({ ...WorkDetails, description: e.target.value });
    
  }
  console.log(WorkDetails)
    return(
        <WorkExpContainer>
        <input type="text" placeholder="Employer name" onChange={handleEmployerName} />
        <input type="text" placeholder="Role" onChange={handleRole} />
        <input type="text" placeholder="description" onChange={handleDescription} />
        <DateContainer>
          <div>
          <label>Starting From</label>&nbsp; 
          <input type="date" placeholder="starting from" onChange={handleStartingFromDate}/>
          </div>
          <div>
        <label>End Date</label>&nbsp; 
        <input type="date" placeholder="End Date" onChange={handleEndDate}/>
        </div>
        <div >
        <label for="present">Present</label>&nbsp;
        <input type="checkbox" id="present" onChange={handlePresentDate}/>
        </div>
        </DateContainer>
        </WorkExpContainer>
    )

}
export default WorkExperience

const WorkExpContainer = styled.div`
display: flex;
flex-direction: column;
margin: 0.2rem 0.2rem;
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

const DateContainer = styled.div`
display: flex;
label{
  margin: 0 auto;
  color: #6e6a6a;
  font-size: 13px;
  position: relative;
}
div{
  margin:1rem 0;
  display: flex;
  justify-content:space-evenly;
  align-items: center;
  margin-left: -1.5rem;
}
`;
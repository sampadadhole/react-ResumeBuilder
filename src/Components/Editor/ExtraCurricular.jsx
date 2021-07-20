import React from "react";
import Links from "./Links";
import styled from "styled-components";

function ExtraCurricular(props){
    const { userDetails, setUserDetails, links, setLinks , setWorkDetails, WorkDetails } = props;

    return(
        <>
        <input type="text"
            placeholder="Extra" />
        </>
    )
}

export default ExtraCurricular
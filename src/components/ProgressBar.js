import React from 'react';
import styled from "styled-components";
import Filler from './Filler';

const ProgressBar = (props) => {
    return(
        <ProgressBarDiv>
            <Filler percentage={props.percentage}/>
        </ProgressBarDiv>
    );
}

const ProgressBarDiv = styled.div`
    position: relative;
    height: 20px;
    width: 350px;
    border-radius: 50px;
    border: 1px solid #fff;
    margin-bottom: 20px;
`;

export default ProgressBar;
import React from 'react';
import styled from "styled-components";

const ProgressBar = () => {
    return(
        <ProgressBarDiv />
    );
}

const ProgressBarDiv = styled.div`
    position: relative;
    height: 20px;
    width: 350px;
    border-radius: 50px;
    border: 1px solid #fff;
`;

export default ProgressBar;
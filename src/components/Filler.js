import React from 'react';
import styled from "styled-components";

const Filler = (props) => {
    return(
        <FillerDiv percentage={props.percentage} />
    );
}

const FillerDiv = styled.div`
    background: #09d3ac;
    height: 100%;
    border-radius: inherit;
    transition: width .2s ease-in;
    width: ${props => props.percentage}%
`;

export default Filler;
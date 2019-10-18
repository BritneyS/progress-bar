import React, { useState } from 'react';
import ProgressBar from './components/ProgressBar';
import styled from "styled-components";

function App() {
  const [percentage, setPercentage] = useState(0);

  const updatePercentage = () => setPercentage(percentage + 10);

  const isMaxPercentage = (number) => {
    return number >= 100 ? true : false
  }

  const handleClick = () => {
    if (!isMaxPercentage(percentage)) {
      updatePercentage();
    }
  }

  return (
    <AppContainer>
      <AppDiv>
        <ProgressBar percentage={percentage} />
        <button onClick={handleClick}>
          {percentage}
        </button>
      </AppDiv>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  text-align: center;
`;

const AppDiv = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;
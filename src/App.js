import React, { useState } from 'react';
import ProgressBar from './components/ProgressBar';
import styled from "styled-components";

function App() {
  const [percentage, setPercentage] = useState(0);

  const updatePercentage = () => setPercentage(percentage + 10);

  const isMaxPercentage = (number) => number >= 100;

  const handleClick = () => {
    if (!isMaxPercentage(percentage)) {
      updatePercentage();
    }
  }

  return (
    <AppContainer>
      <AppDiv>
        <ProgressBar percentage={percentage} />
        <ProgressButton onClick={handleClick}>
          {percentage}
        </ProgressButton>
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

const ProgressButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: #EE4266;
  color: #f0f0f0;
  font-size: 24px;
  font-weight: 600;
  padding: 0px;
  height: 30px;
  width: 100px;
  border-radius: 50px;
  border: 1px solid #fff;
`;
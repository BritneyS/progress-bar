import React, { useState } from 'react';
import ProgressBar from './components/ProgressBar';
import styled from "styled-components";

function App() {
  const [percentage, setPercentage] = useState(0);

  return (
    <AppContainer>
      <AppDiv>
        <ProgressBar percentage={percentage} />
        <button onClick={() => setPercentage(percentage + 10)}>
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
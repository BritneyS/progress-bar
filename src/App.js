import React from 'react';
import ProgressBar from './components/ProgressBar';
import Filler from './components/Filler';
import styled from "styled-components";

function App() {
  return (
    <AppContainer>
      <AppDiv>
        <ProgressBar>
        <Filler />
      </ProgressBar>
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
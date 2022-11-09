import { useSelector } from 'react-redux';
import styled from 'styled-components';
import './App.css';
import GlobalStyle from './components/GlobalStyle';
import Start from './components/Start';
import Myq from './components/Myq';
import Show from './components/Show';

const Main = styled.main`
  box-sizing: border-box;
  width: 100%;
  max-width: 500px;
  padding: 0 35px;
  margin: auto;
  text-align: center;
`;

function App() {
  const page = useSelector((state) => state.myq.page);
  const survey = useSelector((state) => state.myq.survey);
  return (
    <>
      <GlobalStyle />
      <Main>
        {page === 0 ? (
          <Start />
        ) : page !== survey.length + 1 ? (
          <Myq />
        ) : (
          <Show />
        )}
      </Main>
    </>
  );
}

export default App;

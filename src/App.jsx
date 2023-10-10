import './App.css';
import AgeCalculatorContainer from './components/AgeCalculatorContainer';
import AgeDisplayer from './components/AgeDisplayer';
import AgeForm from './components/AgeForm';
import Attribution from './components/Attribution';

function App() {
  return (
    <>
      <AgeCalculatorContainer>
        <AgeForm />
        <AgeDisplayer />
      </AgeCalculatorContainer>
      <Attribution
        authorName={'QuirozDev'}
        authorGithub={'https://github.com/Quirozdev'}
      />
    </>
  );
}

export default App;

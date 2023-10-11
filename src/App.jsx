import { useState } from 'react';
import './App.css';
import AgeCalculatorContainer from './components/AgeCalculatorContainer';
import AgeDisplayer from './components/AgeDisplayer';
import AgeForm from './components/AgeForm';
import Attribution from './components/Attribution';
import intervalToDuration from 'date-fns/intervalToDuration';

function App() {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const [ageResults, setAgeResults] = useState(null);

  function handleAgeFormSubmit(event) {
    event.preventDefault();

    const birthday = moment(new Date(year, month - 1, day).toISOString());
    const currentDate = moment();

    const timeDifferences = intervalToDuration({
      start: new Date(),
      end: new Date(year, month - 1, day),
    });

    setAgeResults({
      days: timeDifferences.days,
      months: timeDifferences.months,
      years: timeDifferences.years,
    });
  }

  return (
    <div>
      <AgeCalculatorContainer>
        <AgeForm
          dayValue={day}
          monthValue={month}
          yearValue={year}
          handleDayChange={(event) => setDay(event.target.value)}
          handleMonthChange={(event) => setMonth(event.target.value)}
          handleYearChange={(event) => setYear(event.target.value)}
          handleAgeFormSubmit={handleAgeFormSubmit}
        />
        <AgeDisplayer
          years={ageResults?.years}
          months={ageResults?.months}
          days={ageResults?.days}
        />
      </AgeCalculatorContainer>
      <Attribution
        authorName={'QuirozDev'}
        authorGithub={'https://github.com/Quirozdev'}
      />
    </div>
  );
}

export default App;

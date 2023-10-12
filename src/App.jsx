import { useState } from 'react';
import './App.css';
import AgeCalculatorContainer from './components/AgeCalculatorContainer';
import AgeDisplayer from './components/AgeDisplayer';
import AgeForm from './components/AgeForm';
import Attribution from './components/Attribution';
import {
  validateDay,
  validateMonth,
  validateYear,
  validateNotInThePast,
} from './utils/dateValidations';
import intervalToDuration from 'date-fns/intervalToDuration';

function App() {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const [ageResults, setAgeResults] = useState(null);
  const [dayError, setDayError] = useState('');
  const [monthError, setMonthError] = useState('');
  const [yearError, setYearError] = useState('');

  function handleAgeFormSubmit(event) {
    event.preventDefault();

    setDayError('');
    setMonthError('');
    setYearError('');

    const [isValidDay, errorDayMsg] = validateDay(day);
    const [isValidMonth, errorMonthMsg] = validateMonth(month);
    const [isValidYear, errorYearMsg] = validateYear(year);

    const isInThePast = validateNotInThePast({ day, month, year });

    if (!isValidDay) {
      setDayError(errorDayMsg);
    }

    if (!isValidMonth) {
      setMonthError(errorMonthMsg);
    }

    if (!isValidYear) {
      setYearError(errorYearMsg);
    }

    if (isValidDay && isValidMonth && isValidYear) {
      if (!isInThePast) {
        setYearError('Must be in the past');
        return;
      }

      const { days, months, years } = intervalToDuration({
        start: new Date(),
        end: new Date(year, month - 1, day),
      });

      setAgeResults({
        days,
        months,
        years,
      });
    } else {
      setAgeResults(null);
    }
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
          dayError={dayError}
          monthError={monthError}
          yearError={yearError}
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

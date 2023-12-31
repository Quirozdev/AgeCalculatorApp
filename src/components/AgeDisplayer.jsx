import PropTypes from 'prop-types';

const AgeDisplayer = ({ years, months, days }) => {
  return (
    <div className="age-results">
      <h2 className="time-age">
        <span id="age-years" className="age-data">
          {years || '--'}
        </span>{' '}
        years
      </h2>
      <h2 className="time-age">
        <span id="age-months" className="age-data">
          {months || '--'}
        </span>{' '}
        months
      </h2>
      <h2 className="time-age">
        <span id="age-days" className="age-data">
          {days || '--'}
        </span>{' '}
        days
      </h2>
    </div>
  );
};

AgeDisplayer.propTypes = {
  years: PropTypes.number,
  months: PropTypes.number,
  days: PropTypes.number,
};

export default AgeDisplayer;

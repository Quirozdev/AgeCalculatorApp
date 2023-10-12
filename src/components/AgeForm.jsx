import arrowIcon from '../assets/images/icon-arrow.svg';
import PropTypes from 'prop-types';

const AgeForm = ({
  dayValue,
  monthValue,
  yearValue,
  handleDayChange,
  handleMonthChange,
  handleYearChange,
  handleAgeFormSubmit,
  dayError,
  monthError,
  yearError,
}) => {
  const dayClassError = dayError ? 'error' : '';
  const monthClassError = monthError ? 'error' : '';
  const yearClassError = yearError ? 'error' : '';

  return (
    <form className="age-form" onSubmit={handleAgeFormSubmit}>
      <div className="inputs-labels-row">
        <div className="input-label-container">
          <label className={`age-form-label ${dayClassError}`} htmlFor="day">
            DAY
          </label>
          <input
            className={`age-form-input ${dayClassError}`}
            type="text"
            id="day"
            placeholder="DD"
            value={dayValue}
            onChange={handleDayChange}
            maxLength={2}
          />
          <p className="error error-msg">{dayError}</p>
        </div>
        <div className="input-label-container">
          <label
            className={`age-form-label ${monthClassError}`}
            htmlFor="month"
          >
            MONTH
          </label>
          <input
            className={`age-form-input ${monthClassError}`}
            type="text"
            id="month"
            placeholder="MM"
            value={monthValue}
            onChange={handleMonthChange}
            maxLength={2}
          />
          <p className="error error-msg">{monthError}</p>
        </div>
        <div className="input-label-container">
          <label className={`age-form-label ${yearClassError}`} htmlFor="year">
            YEAR
          </label>
          <input
            className={`age-form-input ${yearClassError}`}
            type="text"
            id="year"
            placeholder="YYYY"
            value={yearValue}
            onChange={handleYearChange}
            maxLength={4}
          />
          <p className="error error-msg">{yearError}</p>
        </div>
      </div>
      <div className="submit-btn-container">
        <div className="horizontal-line"></div>
        <button className="calculate-age-btn" type="submit">
          <img srcSet={arrowIcon} alt="Arrow icon" />
        </button>
      </div>
    </form>
  );
};

AgeForm.propTypes = {
  dayValue: PropTypes.string.isRequired,
  monthValue: PropTypes.string.isRequired,
  yearValue: PropTypes.string.isRequired,
  handleDayChange: PropTypes.func.isRequired,
  handleMonthChange: PropTypes.func.isRequired,
  handleYearChange: PropTypes.func.isRequired,
  handleAgeFormSubmit: PropTypes.func.isRequired,
  dayError: PropTypes.string.isRequired,
  monthError: PropTypes.string.isRequired,
  yearError: PropTypes.string.isRequired,
};

export default AgeForm;

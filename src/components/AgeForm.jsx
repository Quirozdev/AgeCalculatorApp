import arrowIcon from '../assets/images/icon-arrow.svg';

const AgeForm = ({
  dayValue,
  monthValue,
  yearValue,
  handleDayChange,
  handleMonthChange,
  handleYearChange,
  handleAgeFormSubmit,
}) => {
  return (
    <form className="age-form" onSubmit={handleAgeFormSubmit}>
      <div className="inputs-labels-row">
        <div className="input-label-container">
          <label className="age-form-label" htmlFor="day">
            DAY
          </label>
          <input
            className="age-form-input"
            type="text"
            id="day"
            placeholder="DD"
            value={dayValue}
            onChange={handleDayChange}
            maxLength={2}
          />
        </div>
        <div className="input-label-container">
          <label className="age-form-label" htmlFor="month">
            MONTH
          </label>
          <input
            className="age-form-input"
            type="text"
            id="month"
            placeholder="MM"
            value={monthValue}
            onChange={handleMonthChange}
            maxLength={2}
          />
        </div>
        <div className="input-label-container">
          <label className="age-form-label" htmlFor="year">
            YEAR
          </label>
          <input
            className="age-form-input"
            type="text"
            id="year"
            placeholder="YYYY"
            value={yearValue}
            onChange={handleYearChange}
            maxLength={4}
          />
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

export default AgeForm;

import arrowIcon from '../assets/images/icon-arrow.svg';

const AgeForm = () => {
  return (
    <form className="age-form">
      <div className="input-label-container">
        <label className="age-form-label" htmlFor="day">
          DAY
        </label>
        <input
          className="age-form-input"
          type="text"
          id="day"
          placeholder="DD"
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
        />
      </div>
      <button className="calculate-age-btn" type="submit">
        <img srcSet={arrowIcon} alt="Arrow icon" />
      </button>
    </form>
  );
};

export default AgeForm;

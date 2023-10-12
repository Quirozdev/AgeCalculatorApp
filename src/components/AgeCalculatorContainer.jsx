import PropTypes from 'prop-types';

const AgeCalculatorContainer = ({ children }) => {
  return <div className="age-calculator-container">{children}</div>;
};

AgeCalculatorContainer.propTypes = {
  children: PropTypes.array,
};

export default AgeCalculatorContainer;

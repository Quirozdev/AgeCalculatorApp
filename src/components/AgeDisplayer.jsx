const AgeDisplayer = ({ years, months, days }) => {
  return (
    <div>
      <h2>
        <span id="age-years">{years || '--'}</span> years
      </h2>
      <h2>
        <span id="age-months">{months || '--'}</span> months
      </h2>
      <h2>
        <span id="age-days">{days || '--'}</span> days
      </h2>
    </div>
  );
};

export default AgeDisplayer;

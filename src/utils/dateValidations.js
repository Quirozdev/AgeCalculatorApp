function validateYear(year) {
  if (!year) {
    return [false, 'Year field is required'];
  }
  const yearNumber = Number(year);
  if (isNaN(yearNumber)) {
    return [false, 'Must be a valid year'];
  }

  const currentDate = new Date();

  if (yearNumber > currentDate.getFullYear()) {
    return [false, 'Must be in the past'];
  }

  return [true, ''];
}

function validateMonth(month) {
  if (!month) {
    return [false, 'Month field is required'];
  }

  const monthNumber = Number(month);
  if (isNaN(monthNumber) || month < 1 || month > 12) {
    return [false, 'Must be a valid month'];
  }

  return [true, ''];
}

function validateDay(day) {
  if (!day) {
    return [false, 'Day field is required'];
  }
  const dayNumber = Number(day);
  if (isNaN(dayNumber) || day < 1 || day > 31) {
    return [false, 'Must be a valid day'];
  }

  return [true, ''];
}

function validateNotInThePast({ day, month, year }) {
  const currentDate = new Date();
  const birthdayMilliseconds = Date.UTC(year, month - 1, day);
  const currentDateMilliseconds = Date.UTC(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate()
  );
  return currentDateMilliseconds - birthdayMilliseconds >= 0;
}

export { validateYear, validateMonth, validateDay, validateNotInThePast };

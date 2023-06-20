// Function to get the day of the week for a given date
function getDayOfWeek(dateString) {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const date = new Date(dateString);
  const dayIndex = date.getUTCDay();
  return daysOfWeek[dayIndex];
}

// Function to get the day of the week for the current date
function getCurrentDayOfWeek() {
  const currentDate = new Date();
  const currentDateString = currentDate.toISOString().split('T')[0];
  return getDayOfWeek(currentDateString);
}

// Example
const date = '2023-06-20';
const dayOfWeek = getDayOfWeek(date);
console.log(dayOfWeek); // Output: Tuesday

const currentDayOfWeek = getCurrentDayOfWeek();
console.log(currentDayOfWeek); // Output: (current day of the week)

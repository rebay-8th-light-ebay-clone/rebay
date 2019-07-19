export const countdown = (startDate, endDate) => {
  let dayDifference = endDate.getDay() - startDate.getDay();
  let hourDifference = endDate.getHours() - startDate.getHours();
  dayDifference = hourDifference < 0 ? dayDifference - 1 : dayDifference;
  hourDifference = hourDifference < 0 ? 24 + hourDifference : hourDifference;

  if (dayDifference < 0) {
    return "This Auction Has Ended";
  }
  return `Ends in ${dayDifference} day ${hourDifference} hr`;
}
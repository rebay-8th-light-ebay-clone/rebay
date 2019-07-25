const { format } = require('date-fns');

export function timeRemainingFromNowMessage(endDate) {
  return timeRemainingMessage(new Date(), endDate);
}

export function timeRemainingMessage(startDate, endDate) {
  const [days, hours, minutes] = timeRemaining(startDate, endDate);
  if (startDate >= endDate) {
    return "This Auction Has Ended";
  } else if (days === 0 && hours === 0) {
    return `Ends in ${minutes} min`
  } else if (days === 0) {
    return `Ends in ${hours} hr ${minutes} min`;
  }
  return `Ends in ${days} day ${hours} hr`;
}

export function timeRemaining(startDate, endDate) {
  const dayDifference = _diffInDays(startDate, endDate);
  const hourDifference = _diffInHours(startDate, endDate);
  const minuteDifference = _diffInMinutes(startDate, endDate);
  return [dayDifference, hourDifference, minuteDifference];
}

export const dayEndedUTCString = date => {
  let entered_date = new Date(date);
  const end_date = setDefaultTime(entered_date);
  return end_date.toISOString();
}

const setDefaultTime = date => {
  const defaultEndHours = 23;
  const defaultEndMinutes = 59;
  const defaultEndSeconds = 59;

  date.setHours(defaultEndHours);
  date.setMinutes(defaultEndMinutes);
  date.setSeconds(defaultEndSeconds);

  return date;
}

function _diffInSeconds(startDate, endDate) {
  return (endDate - startDate) / 1000;
}

function _diffInDays(startDate, endDate) {
  const secondsDiff = _diffInSeconds(startDate, endDate);
  return Math.floor(secondsDiff / (86400));
}

function _diffInHours(startDate, endDate) {
  const secondsDiff = _diffInSeconds(startDate, endDate);
  const dayDiffInSeconds = _diffInDays(startDate, endDate) * 86400;
  return Math.floor((secondsDiff - dayDiffInSeconds) / 3600);
}

function _diffInMinutes(startDate, endDate) {
  const secondsDiff = _diffInSeconds(startDate, endDate);
  const dayDiffInSeconds = _diffInDays(startDate, endDate) * 86400;
  const hourDiffinSeconds = _diffInHours(startDate, endDate) * 3600;
  return Math.floor((secondsDiff - dayDiffInSeconds - hourDiffinSeconds) / 60);
}

export function dateFormatter(utc_datetime) {
  return format(new Date(utc_datetime), 'MMM MM, YYYY HH:mm A')
}
const { format, parse, isPast } = require('date-fns');

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
  const dayText = days > 1 ? "days" : "day";
  const hourText = hours > 1 ? "hrs" : "hr";
  return `Ends in ${days} ${dayText} ${hours} ${hourText}`;
}

export function timeRemaining(startDate, endDate) {
  const dayDifference = _diffInDays(startDate, endDate);
  const hourDifference = _diffInHours(startDate, endDate);
  const minuteDifference = _diffInMinutes(startDate, endDate);
  return [dayDifference, hourDifference, minuteDifference];
}

export const ISOString = date => {
  let entered_date = parse(date)
  return entered_date.toISOString();
}

export const dayEndedUTCString = date => {
  let entered_date = parse(date)
  const end_date = setDefaultTime(entered_date);
  return end_date.toISOString();
}

const setDefaultTime = date => {
  date.setHours(23, 59, 59);
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

export function formatDate(utc_datetime) {
  if (!utc_datetime.includes("Z")) {
    utc_datetime += "Z";
  }
  return format(parse(utc_datetime), 'MMM DD, YYYY hh:mm A')
}

export function ISOStringToLocaleDate(utc_datetime) {
  return format(parse(utc_datetime), 'YYYY-MM-DD')
}

export function ISOStringToLocaleTime(utc_datetime) {
  return new Date(utc_datetime).toLocaleTimeString()
}

export function dateHasPassed(iso_string) {
  return isPast(parse(iso_string));
}
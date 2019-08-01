import { dayEndedUTCString, ISOStringToLocaleDate } from "../../utilities/date";
import { convertDollarsToPennies, convertPenniesToDollars } from "../../utilities/price";

export const formatRequest = values => {
  const { title, description, image, price, category, date } = values;
  return {
    price: convertDollarsToPennies(price),
    end_date: dayEndedUTCString(date),
    title,
    description,
    image,
    category
  };
};


export const formatResponse = values => {
  const { title, description, image, price, category, end_date, uuid } = values;

  return {
    price: convertPenniesToDollars(price),
    date: ISOStringToLocaleDate(end_date),
    title,
    description,
    image,
    category,
    uuid
  }
}
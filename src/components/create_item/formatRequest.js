import { dayEndedUTCString, ISOStringToLocaleDate } from "../../utilities/date";
import { dollarToPennyConverter, pennyToDollarConverter } from "../../utilities/price";

export const formatRequest = values => {
  const { title, description, image, price, category, date } = values;
  return {
    price: dollarToPennyConverter(price),
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
    price: pennyToDollarConverter(price),
    date: ISOStringToLocaleDate(end_date),
    title,
    description,
    image,
    category,
    uuid
  }
}
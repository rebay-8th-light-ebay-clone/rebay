import { dayEndedUTCString } from "./date";
import { convertDollarsToPennies } from "./price";

export const formatItemRequest = values => {
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
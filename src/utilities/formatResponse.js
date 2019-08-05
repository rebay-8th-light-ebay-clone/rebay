import { ISOStringToLocaleDate } from "./date";
import { convertPenniesToDollars } from "./price";

export const formatItemResponse = values => {
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
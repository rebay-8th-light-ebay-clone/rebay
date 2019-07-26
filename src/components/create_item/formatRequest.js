import { dayEndedUTCString } from "../../utilities/date";
import { dollarToPennyConverter } from "../../utilities/price";

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

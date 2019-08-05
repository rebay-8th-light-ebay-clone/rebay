import { pipe } from "./functional";

export const bidPriceValidate = (values, minimum_price) => {
  const errors = {};

  return pipe(
    validateBidPrice,
    getErrors
  )([values, errors, minimum_price]);
}

export const validate = values => {
  const errors = {};

  return pipe(
    validateTitle,
    validateDescription,
    validateImage,
    validatePrice,
    validateCategory,
    validateDate,
    getErrors
  )([values, errors]);
};

const validateTitle = ([values, errors]) => {
  const { title } = values;
  return [values, { ...errors, title: titleError(title) }];
};

const validateDescription = ([values, errors]) => {
  const { description } = values;
  return [values, { ...errors, description: descriptionError(description) }];
};

const validateImage = ([values, errors]) => {
  const { image } = values;
  return [values, { ...errors, image: imageError(image) }];
};

const validatePrice = ([values, errors]) => {
  const { price } = values;
  return [values, { ...errors, price: priceError(price) }];
};

const validateBidPrice = ([values, errors, minimum_price]) => {
  const { price } = values;
  return [values, { ...errors, price: bidPriceError(price, minimum_price) }];
};

const validateCategory = ([values, errors]) => {
  const { category } = values;
  return [values, { ...errors, category: categoryError(category) }];
};

const validateDate = ([values, errors]) => {
  const { date } = values;
  return [values, { ...errors, date: dateError(date) }];
};

const titleError = title => {
  if (isEmpty(title)) {
    return "Title is required";
  } else {
    return "";
  }
};

const descriptionError = description => {
  if (isEmpty(description)) {
    return "Description is required";
  } else {
    return "";
  }
};

const imageError = image => {
  if (isEmpty(image)) {
    return "Image URL is required";
  } else if (!isValidUrl(image)) {
    return "Not a valid image URL";
  } else {
    return "";
  }
};

const priceError = price => {
  if (isEmpty(price)) {
    return "Price is required";
  } else if (isNaN(price)) {
    return "Price must be a number";
  } else if (price < 1) {
    return "Price must be at least 1.00";
  } else {
    return "";
  }
};


const bidPriceError = (price, minimum_price) => {
  if (isEmpty(price)) {
    return "Price is required";
  } else if (isNaN(price)) {
    return "Price must be a number";
  } else if (price < minimum_price) {
    return `Price must be at least $${minimum_price}`;
  } else {
    return "";
  }
};

const categoryError = category => {
  if (isEmpty(category)) {
    return "Category is required";
  } else {
    return "";
  }
};

const dateError = date => {
  if (isEmpty(date)) {
    return "Auction end date is required";
  } else {
    return "";
  }
};

const isEmpty = value => !value || !value.trim();

const isValidUrl = url => {
  const validImageRegex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)/;
  return validImageRegex.test(url);
};

const getErrors = arr => arr[1];

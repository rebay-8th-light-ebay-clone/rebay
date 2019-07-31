import React from "react";
import CreateItemPage from "./CreateItemPage";
import { cleanup, render, fireEvent } from "@testing-library/react";

describe("CreateItemPage", () => {
  afterEach(cleanup);

  const setup = labelText => {
    const { ...utils } = render(<CreateItemPage match={{ params: { user_uuid: 2 } }} />);
    const input = utils.getByLabelText(labelText);
    return { input, ...utils };
  };

  test("renders error when title is empty", () => {
    const { input, getByText } = setup("Title");

    fireEvent.change(input, { target: { value: " " } });

    getByText("Title is required");
  });

  test("does not render error when title is valid", () => {
    const { input, queryByText } = setup("Title");

    fireEvent.change(input, { target: { value: "valid title" } });

    const error = queryByText("Title is required");
    expect(error).toBeNull();
  });

  test("renders error when description is empty", () => {
    const { input, getByText } = setup("Description");

    fireEvent.change(input, { target: { value: " " } });

    getByText("Description is required");
  });

  test("does not render error when description is valid", () => {
    const { input, queryByText } = setup("Description");

    fireEvent.change(input, { target: { value: "valid description" } });

    const error = queryByText("Description is required");
    expect(error).toBeNull();
  });

  test("renders error when image url is empty", () => {
    const { input, getByText } = setup("Image URL");

    fireEvent.change(input, { target: { value: " " } });

    getByText("Image URL is required");
  });

  test("renders error when image is an invalid URL", () => {
    const { input, getByText } = setup("Image URL");

    fireEvent.change(input, { target: { value: "unformatted text" } });

    getByText("Not a valid image URL");
  });

  test("does not render error when image url is valid", () => {
    const { input, queryByText } = setup("Image URL");

    fireEvent.change(input, { target: { value: "http://example.com" } });

    const error = queryByText("Image URL is required");
    expect(error).toBeNull();
  });

  test("renders error when price is empty", () => {
    const { input, getByText } = setup("Starting Price (USD)");

    fireEvent.change(input, { target: { value: " " } });

    getByText("Price is required");
  });

  test("does not render error when price is valid", () => {
    const { input, queryByText } = setup("Starting Price (USD)");

    fireEvent.change(input, { target: { value: "1.00" } });

    const error = queryByText("Price is required");
    expect(error).toBeNull();
  });

  test("renders error when price is less than 1.00", () => {
    const utils = render(<CreateItemPage match={{ params: { user_uuid: 2 } }} />);
    const input = utils.getByLabelText("Starting Price (USD)");

    fireEvent.change(input, { target: { value: "a" } });

    utils.getByText("Price must be a number");
  });

  test("renders error when price is less than 1.00", () => {
    const { input, getByText } = setup("Starting Price (USD)");

    fireEvent.change(input, { target: { value: "0.99" } });

    getByText("Price must be at least 1.00");
  });

  test("category field defaults to value of other", () => {
    const { input } = setup("Category");

    expect(input.value).toBe("other");
  });

  test("renders error when date is empty", () => {
    const { input, getByText } = setup("Auction End Date");

    fireEvent.change(input, { target: { value: " " } });
    fireEvent.click(getByText("Submit"));

    getByText("Auction end date is required");
  });

  test("does not render error when date is valid", () => {
    const { input, queryByText, getByText } = setup("Auction End Date");

    fireEvent.change(input, { target: { value: "2030-06-01" } });
    fireEvent.click(getByText("Submit"));

    const error = queryByText("Auction end date is required");
    expect(error).toBeNull();
  });
});

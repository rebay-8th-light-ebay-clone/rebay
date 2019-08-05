import React from "react";
import { cleanup, render, fireEvent } from "@testing-library/react";
import ItemBidForm from "./ItemBidForm";

describe("Item Bid Form", () => {
  afterEach(cleanup);

  test("renders with initial minimum price", () => {
    const { getByLabelText, getByText } = render(<ItemBidForm minimum_price={"2.00"} auction_active={true} />);

    const price = getByLabelText("Your Bid (USD)");
    expect(price.value).toBe("2.00");
    getByText(/You must bid at least \$2.00/)
  });

  test("disables price input when auction has ended", () => {
    const { queryByLabelText } = render(<ItemBidForm minimum_price={"2.00"} auction_active={false} />);

    const price = queryByLabelText("Your Bid (USD)");
    expect(price).toBeNull();
  })

  const itemBidForm = <ItemBidForm minimum_price={"2.00"} auction_active={true} />;

  const setup = labelText => {
    const { ...utils } = render(itemBidForm);
    const input = utils.getByLabelText(labelText);
    return { input, ...utils };
  };

  test("does not render error when price is valid", () => {
    const { input, queryByText } = setup("Your Bid (USD)");

    fireEvent.change(input, { target: { value: "2.00" } });

    const error = queryByText("Price is required");
    expect(error).toBeNull();
  });

  test("renders error when price is empty", () => {
    const { input, getByText } = setup("Your Bid (USD)");

    fireEvent.change(input, { target: { value: " " } });

    getByText("Price is required");
  });

  test("renders error when price is less than 1.00", () => {
    const { input, getByText } = setup("Your Bid (USD)");

    fireEvent.change(input, { target: { value: "a" } });

    getByText("Price must be a number");
  });

  test("renders error when price is less than minimum", () => {
    const { input, getByText } = setup("Your Bid (USD)");

    fireEvent.change(input, { target: { value: "1.00" } });

    getByText("Price must be at least $2.00");
  });
})
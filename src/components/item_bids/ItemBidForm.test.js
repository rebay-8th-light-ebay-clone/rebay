import React from "react";
import { cleanup, render, fireEvent } from "@testing-library/react";
import ItemBidForm from "./ItemBidForm";

describe("Item Bid Form", () => {
  afterEach(cleanup);

  test("renders with initial minimum price", () => {
    const { getByLabelText, getByText } = render(<ItemBidForm minimum_price={"2.00"} auction_active={true} />);

    getByLabelText("Your Bid (USD)");
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

describe("Item Bid Form - Automatic Bidding", () => {
  afterEach(cleanup);

  const itemAutoBidForm = <ItemBidForm minimum_price={"2.00"} auction_active={true} auto_bid={true} />;
  const minBid = "Your Minimum Bid (USD)";
  const maxBid = "Your Maximum Bid (USD)";

  test("renders a maximum price input for auto bid", () => {
    const { queryByLabelText, getByText } = render(itemAutoBidForm);

    queryByLabelText(minBid);
    queryByLabelText(maxBid);
    getByText(/If you are out-bid by another bidder, we will automatically place a bid for you until your maximum bid is reached/i)
  })

  const setup = labelText => {
    const { ...utils } = render(itemAutoBidForm);
    const input = utils.getByLabelText(labelText);
    return { input, ...utils };
  };

  test("does not render error when max price is valid", () => {
    const { input, queryByText } = setup(maxBid);

    fireEvent.change(input, { target: { value: "2.00" } });

    const error = queryByText("Price is required");
    expect(error).toBeNull();
  });

  test("renders error when price is empty", () => {
    const { input, getByText } = setup(maxBid);

    fireEvent.change(input, { target: { value: " " } });

    getByText("Price is required");
  });

  test("renders error when price is less than price", () => {
    const minimumBid = setup(minBid);
    fireEvent.change(minimumBid.input, { target: { value: "69.00" } });
    expect(minimumBid.input.value).toEqual("69.00")

    const { input, getByText } = setup(maxBid);
    fireEvent.change(input, { target: { value: "69.00" } });
    getByText(/You must bid at least \$70.00/i);
  });
})
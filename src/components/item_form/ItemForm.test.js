import React from "react";
import ItemForm from "./ItemForm";
import { cleanup, render, fireEvent } from "@testing-library/react";

describe("ItemForm", () => {
  afterEach(cleanup);

  test("renders with no initial values", () => {
    const { getByLabelText } = render(<ItemForm />);

    const title = getByLabelText("Title");
    expect(title.value).toBe("");

    const description = getByLabelText("Description");
    expect(description.value).toBe("");

    const image = getByLabelText("Image URL");
    expect(image.value).toBe("");

    const price = getByLabelText("Starting Price (USD)");
    expect(price.value).toBe("");

    const category = getByLabelText("Description");
    expect(category.value).toBe("");

    const date = getByLabelText("Auction End Date");
    expect(date.value).toBe("");
  });

  test("renders with some initial values", () => {
    const { getByLabelText } = render(
      <ItemForm initialValues={{ title: "Example Title" }} />
    );

    const title = getByLabelText("Title");
    expect(title.value).toBe("Example Title");

    const description = getByLabelText("Description");
    expect(description.value).toBe("");

    const image = getByLabelText("Image URL");
    expect(image.value).toBe("");

    const price = getByLabelText("Starting Price (USD)");
    expect(price.value).toBe("");

    const category = getByLabelText("Description");
    expect(category.value).toBe("");

    const date = getByLabelText("Auction End Date");
    expect(date.value).toBe("");
  });

  test("renders with all initial values", () => {
    const { getByLabelText } = render(
      <ItemForm
        initialValues={{
          title: "Example Title",
          description: "Example Description",
          image: "http://example.com",
          price: "1.00",
          category: "other",
          date: "2050-01-01"
        }}
      />
    );

    const title = getByLabelText("Title");
    expect(title.value).toBe("Example Title");

    const description = getByLabelText("Description");
    expect(description.value).toBe("Example Description");

    const image = getByLabelText("Image URL");
    expect(image.value).toBe("http://example.com");

    const price = getByLabelText("Starting Price (USD)");
    expect(price.value).toBe("1.00");

    const category = getByLabelText("Category");
    expect(category.value).toBe("other");

    const date = getByLabelText("Auction End Date");
    expect(date.value).toBe("2050-01-01");
  });

  test("can submit when no validation errors", () => {
    const mockSubmit = jest.fn();
    const mockErrors = { title: "" };
    const validate = _ => mockErrors;
    const component = render(
      <ItemForm submit={mockSubmit} validate={validate} />
    );

    fireEvent.click(component.getByText("Submit"));

    expect(mockSubmit.mock.calls.length).toBe(1);
  });

  test("cannot submit when validation errors exist", () => {
    const mockSubmit = jest.fn();
    const mockErrors = { title: "Some Error" };
    const validate = _ => mockErrors;
    const component = render(
      <ItemForm submit={mockSubmit} validate={validate} />
    );

    fireEvent.click(component.getByText("Submit"));

    expect(mockSubmit.mock.calls.length).toBe(0);
  });
});

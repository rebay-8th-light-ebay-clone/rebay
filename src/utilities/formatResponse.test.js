import { formatItemResponse } from "./formatResponse";

describe("formatRequest", () => {
  const response = {
    title: "Example title",
    description: "Example description",
    image: "http://example.com/image",
    price: 100,
    category: "other",
    end_date: "2020-01-01T07:59:59.000Z",
    uuid: "112345"
  }

  const expectedFormattedResponse = {
    title: "Example title",
    description: "Example description",
    image: "http://example.com/image",
    price: "1.00",
    category: "other",
    date: "2019-12-31",
    uuid: "112345"
  }

  test("properly formats the entire response payload", () => {
    const formattedResponse = formatItemResponse(response);
    expect(formattedResponse).toStrictEqual(expectedFormattedResponse);
  });
});
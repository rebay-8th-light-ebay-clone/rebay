import { formatRequest } from "./formatRequest";

const request = {
  title: "Example title",
  description: "Example description",
  image: "http://example.com/image",
  price: "1.00",
  category: "other",
  date: "12-31-2019"
};

const expectedFormattedRequest = {
  title: "Example title",
  description: "Example description",
  image: "http://example.com/image",
  price: 100,
  category: "other",
  end_date: "2020-01-01T07:59:59.000Z"
};

describe("formatRequest", () => {
  test("properly formats the entire request payload", () => {
    const formattedRequest = formatRequest(request);
    expect(formattedRequest).toStrictEqual(expectedFormattedRequest);
  });
});

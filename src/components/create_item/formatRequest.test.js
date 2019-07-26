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
  end_date: "Wed, 01 Jan 2020 07:59:59 GMT"
};

describe("formatRequest", () => {
  test("properly formats the entire request payload", () => {
    const formattedRequest = formatRequest(request);
    expect(formattedRequest).toStrictEqual(expectedFormattedRequest);
  });
});

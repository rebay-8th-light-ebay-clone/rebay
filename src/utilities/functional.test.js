import { pipe } from "./functional";

describe("pipe", () => {
  test("can create a pipeline with no functions", () => {
    const pipedResult = pipe()(true);
    expect(pipedResult).toBeTruthy();
  });

  test("can create a pipeline with one function", () => {
    const mockFn = jest.fn(x => x);
    pipe(mockFn)(true);
    expect(mockFn.mock.calls.length).toBe(1);
  });

  test("can create a pipeline with three functions", () => {
    const firstMockFn = jest.fn(x => x);
    const secondMockFn = jest.fn(x => x);
    const thirdMockFn = jest.fn(x => x);
    pipe(
      firstMockFn,
      secondMockFn,
      thirdMockFn
    )(true);
    expect(firstMockFn.mock.calls.length).toBe(1);
    expect(secondMockFn.mock.calls.length).toBe(1);
  });

  test("applies functions from left to right", () => {
    const plusOne = n => n + 1;
    const timesTwo = n => n * 2;
    const pipedResult = pipe(
      plusOne,
      timesTwo
    )(2);
    expect(pipedResult).toBe(6);
  });
});

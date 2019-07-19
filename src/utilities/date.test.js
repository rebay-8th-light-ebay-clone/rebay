import { countdown } from './date';

test('it returns a string representing the remaining days and hours', () => {
  const startDate = new Date("2019-07-16T15:53:52Z");
  const endDate = new Date("2019-07-17T16:53:52Z");

  expect(countdown(startDate, endDate)).toEqual("Ends in 1 day 1 hr");
});

test('it handles negative hour difference', () => {
  const startDate = new Date("2019-07-14T17:53:52Z");
  const endDate = new Date("2019-07-17T16:53:52Z");

  expect(countdown(startDate, endDate)).toEqual("Ends in 2 day 23 hr");
})

test('it handles a negative countdown', () => {
  const startDate = new Date("2019-07-18T17:53:52Z");
  const endDate = new Date("2019-07-17T16:53:52Z");

  expect(countdown(startDate, endDate)).toEqual("This Auction Has Ended");
})
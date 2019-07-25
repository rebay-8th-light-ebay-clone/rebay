import { timeRemaining, timeRemainingMessage } from './date';

describe('timeRemaining', () => {
  test('returns the remaining days hours, and minutes', () => {
    const startDate = new Date("2019-07-16T15:53:52Z");
    const endDate = new Date("2019-07-17T16:56:52Z");

    expect(timeRemaining(startDate, endDate)).toEqual([1, 1, 3]);
  });

  test('it handles negative hour difference', () => {
    const startDate = new Date("2019-07-14T17:53:52Z");
    const endDate = new Date("2019-07-17T16:53:52Z");

    expect(timeRemaining(startDate, endDate)).toEqual([2, 23, 0]);
  })

  test('it handles negative minute difference', () => {
    const startDate = new Date("2019-07-14T17:53:52Z");
    const endDate = new Date("2019-07-17T16:51:52Z");

    expect(timeRemaining(startDate, endDate)).toEqual([2, 22, 58]);
  })

  test('it handles a negative countdown', () => {
    const startDate = new Date("2019-07-18T17:53:52Z");
    const endDate = new Date("2019-07-17T16:53:52Z");

    expect(timeRemaining(startDate, endDate)).toEqual([-2, 23, 0]);
  })
});

describe('timeRemainingMessage', () => {
  test('it returns a string representing the remaining days and hours', () => {
    const startDate = new Date("2019-07-16T15:53:52Z");
    const endDate = new Date("2019-07-17T16:53:52Z");
    const expectedMessage = "Ends in 1 day 1 hr";

    expect(timeRemainingMessage(startDate, endDate)).toEqual(expectedMessage);
  });

  test('it returns hours and minutes when there is under a day left', () => {
    const startDate = new Date("2019-07-17T12:22:52Z");
    const endDate = new Date("2019-07-17T16:53:52Z");
    const expectedMessage = "Ends in 4 hr 31 min";

    expect(timeRemainingMessage(startDate, endDate)).toEqual(expectedMessage);
  });

  test('it returns minutes when there is under an hour left', () => {
    const startDate = new Date("2019-07-17T16:22:52Z");
    const endDate = new Date("2019-07-17T16:53:52Z");
    const expectedMessage = "Ends in 31 min";

    expect(timeRemainingMessage(startDate, endDate)).toEqual(expectedMessage);
  });

  test('it returns a message indicating the auction has ended', () => {
    const startDate = new Date("2019-07-18T17:53:52Z");
    const endDate = new Date("2019-07-17T16:53:52Z");
    const expectedMessage = "This Auction Has Ended";

    expect(timeRemainingMessage(startDate, endDate)).toEqual(expectedMessage);
  });
});

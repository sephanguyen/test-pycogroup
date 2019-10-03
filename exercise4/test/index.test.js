import { expect } from 'chai';
import { isCanBooking } from '../src/index';
describe('isCanBooking', function() {
  it('not booking when has one room', () => {
    const arrivals = [1, 3, 5];
    const departures = [2, 6, 10];
    const k = 1;
    expect(isCanBooking(arrivals, departures, k)).equal(false);
  });
  it('not booking when has two room', () => {
    const arrivals = [1, 3, 5];
    const departures = [2, 6, 10];
    const k = 2;
    expect(isCanBooking(arrivals, departures, k)).equal(true);
  });
});

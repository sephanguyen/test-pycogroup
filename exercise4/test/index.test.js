import { expect } from 'chai';
import {
  isCanBooking,
  MESSAGE_ROOM_INVALID,
  MESSAGE_ARRIVALS_INVALID,
  MESSAGE_DEPATURES_INVALID,
  MESSAGE_DEPATURES_AND_ARRIVALS_NOT_EQUAL_LENGTH_INVALID
} from '../src/index';
describe('isCanBooking', function() {
  it('not booking when has one room', () => {
    const arrivals = [1, 3, 5];
    const departures = [2, 6, 10];
    const numberRoom = 1;
    expect(isCanBooking(arrivals, departures, numberRoom)).equal(false);
  });
  it('not booking when has two room', () => {
    const arrivals = [1, 3, 5];
    const departures = [2, 6, 10];
    const numberRoom = 2;
    expect(isCanBooking(arrivals, departures, numberRoom)).equal(true);
  });

  it('Throw exception when numberRoom is invalid', () => {
    const arrivals = [1, 3, 5];
    const departures = [2, 6, 10];
    const numberRoom = '2';
    expect(() => isCanBooking(arrivals, departures, numberRoom)).to.throws(
      Error,
      MESSAGE_ROOM_INVALID
    );
  });
  it('Throw exception when arrivals is not array', () => {
    const arrivals = 1;
    const departures = [2, 6, 10];
    const numberRoom = 2;
    expect(() => isCanBooking(arrivals, departures, numberRoom)).to.throws(
      Error,
      MESSAGE_ARRIVALS_INVALID
    );
  });
  it('Throw exception when arrivals is array invalid', () => {
    const arrivals = [2, 'asdsa', 10];
    const departures = [2, 6, 10];
    const numberRoom = 2;
    expect(() => isCanBooking(arrivals, departures, numberRoom)).to.throws(
      Error,
      MESSAGE_ARRIVALS_INVALID
    );
  });
  it('Throw exception when departures is array invalid', () => {
    const arrivals = [1, 3, 5];
    const departures = [2, 'zxy', 10];
    const numberRoom = 2;
    expect(() => isCanBooking(arrivals, departures, numberRoom)).to.throws(
      Error,
      MESSAGE_DEPATURES_INVALID
    );
  });
  it('Throw exception when departures is not array', () => {
    const arrivals = [1, 3, 5];
    const departures = '1';
    const numberRoom = 2;
    expect(() => isCanBooking(arrivals, departures, numberRoom)).to.throws(
      Error,
      MESSAGE_DEPATURES_INVALID
    );
  });
  it('Throw exception when length departures and arrivals not equal', () => {
    const arrivals = [1, 3, 5, 1];
    const departures = [2, 6, 10];
    const numberRoom = 2;
    expect(() => isCanBooking(arrivals, departures, numberRoom)).to.throws(
      Error,
      MESSAGE_DEPATURES_AND_ARRIVALS_NOT_EQUAL_LENGTH_INVALID
    );
  });
});

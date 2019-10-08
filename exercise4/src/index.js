const MESSAGE_ROOM_INVALID = 'num room is invalid';
const MESSAGE_ARRIVALS_INVALID = 'arrivals is invalid';
const MESSAGE_DEPATURES_INVALID = 'departures is invalid';
const MESSAGE_DEPATURES_AND_ARRIVALS_NOT_EQUAL_LENGTH_INVALID =
  'length of arrivals and departures not equal';
function isCanBooking(arrivals, departures, numRooms) {
  if (!Number.isInteger(numRooms)) {
    throw new Error(MESSAGE_ROOM_INVALID);
  }
  if (
    !Array.isArray(arrivals) ||
    !arrivals.every(arrival => Number.isInteger(arrival))
  ) {
    throw new Error(MESSAGE_ARRIVALS_INVALID);
  }
  if (
    !Array.isArray(departures) ||
    !departures.every(departure => Number.isInteger(departure))
  ) {
    throw new Error(MESSAGE_DEPATURES_INVALID);
  }
  if (departures.length != arrivals.length) {
    throw new Error(MESSAGE_DEPATURES_AND_ARRIVALS_NOT_EQUAL_LENGTH_INVALID);
  }
  const numberArrival = arrivals.length;
  arrivals = arrivals.sort((a, b) => a - b);
  departures = departures.sort((a, b) => a - b);

  let count = 0;
  let indexArrival = 0;
  let indexDeparture = 0;
  while (indexArrival < numberArrival && indexDeparture < numberArrival) {
    if (arrivals[indexArrival] < departures[indexDeparture]) {
      indexArrival++;
      count++;

      if (count > numRooms) {
        return false;
      }
    } else {
      indexDeparture++;
      count--;
    }
  }

  return true;
}

export {
  isCanBooking,
  MESSAGE_ROOM_INVALID,
  MESSAGE_ARRIVALS_INVALID,
  MESSAGE_DEPATURES_INVALID,
  MESSAGE_DEPATURES_AND_ARRIVALS_NOT_EQUAL_LENGTH_INVALID
};

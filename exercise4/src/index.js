function isCanBooking(arrivals, departures, k) {
  const n = arrivals.length;
  arrivals = arrivals.sort((a, b) => a - b);
  departures = departures.sort((a, b) => a - b);

  let count = 0;
  let indexArrival = 0;
  let indexDeparture = 0;
  while (indexArrival < n && indexDeparture < n) {
    if (arrivals[indexArrival] < departures[indexDeparture]) {
      indexArrival++;
      count++;

      if (count > k) {
        return false;
      }
    } else {
      indexDeparture++;
      count--;
    }
  }

  return true;
}

export { isCanBooking };

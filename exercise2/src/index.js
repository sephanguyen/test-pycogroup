function getBundle(age, labelStudent, incom) {
  if (age < 17 && labelStudent == 'yes') {
    return 0;
  }
  if (age < 18) {
    return 0;
  } else {
    if (incom > 0 && incom <= 12000) {
      return 1;
    }
    if (incom > 12000 && incom <= 40000) {
      return 2;
    }
    if (incom > 40000) {
      return 3;
    }
  }
}

export { getBundle };

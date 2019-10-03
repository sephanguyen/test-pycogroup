function getBundle(age, labelStuden, incom) {
  if (age < 18) {
    return 0;
  } else {
    if (labelStuden == 'yes') {
      return 0;
    } else {
      if (incom > 40000) {
        return 3;
      }
      if (incom > 12000) {
        return 2;
      }
      if (incom > 0) {
        return 1;
      }
    }
  }
}

(function main() {
  const output = getBundle(18, 'no', 25000);
  console.log(output);
})();

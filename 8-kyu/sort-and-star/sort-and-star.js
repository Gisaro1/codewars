function twoSort(s) {
const sorted = s.slice().sort();
  const firstString = sorted[0];
  return firstString.split('').join('***');
}
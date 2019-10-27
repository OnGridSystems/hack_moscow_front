export default function numberPad(num) {
  if (Number.isNaN(+num) || num < 0) {
    return num;
  }
  if (num >= 1000000) {
    return `${num}`;
  }

  return `${'0'.repeat(6 - String(Math.abs(num)).length)}${num}`;
}

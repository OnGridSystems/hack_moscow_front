import numberPad from 'js/utils/numberPad';


it('getMonth works properly', () => {
  expect(numberPad(12)).toBe('000012');
  expect(numberPad(1467)).toBe('001467');
  expect(numberPad(1)).toBe('000001');
  expect(numberPad(0)).toBe('000000');
  expect(numberPad(999999)).toBe('999999');
  expect(numberPad(123123123)).toBe('123123123');

  expect(numberPad(NaN)).toBe(NaN);
  expect(numberPad(undefined)).toBe(undefined);
  expect(numberPad(-1)).toBe(-1);
  expect(numberPad('-1')).toBe('-1');
  expect(numberPad('string')).toBe('string');
});

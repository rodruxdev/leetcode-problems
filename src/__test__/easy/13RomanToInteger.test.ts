import romanToInt from '../../easy/13RomanToInteger';

describe('Roman To Integer Tests', () => {
  test('III should be 3', () => {
    const res = romanToInt('III');
    expect(res).toBe(3);
  });
  test('LVIII should be 58', () => {
    const res = romanToInt('LVIII');
    expect(res).toBe(58);
  });
  test('MCMXCIV should be 1994', () => {
    const res = romanToInt('MCMXCIV');
    expect(res).toBe(1994);
  });
});

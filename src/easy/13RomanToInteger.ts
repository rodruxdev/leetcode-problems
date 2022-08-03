// URL: https://leetcode.com/problems/roman-to-integer/

function romanToInt(s: string): number {
  const values = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};
  const letters = s.split('').reverse();
  let prevValue = 0;
  const res = letters.reduce((prev, letter) => {
    const value: number = values[letter];
    if(value < prevValue){
      prevValue = value;
      return (prev - value);
    }
    prevValue = value;
    return (prev + value)
  }, 0)
  return res;
}

export default romanToInt;

export const RomanNumberValues = {
  "I": 1,
  "V": 5,
  "X": 10,
  "L": 50,
  "C": 100,
  "D": 500,
  "M": 1000
}
  
export const RomanNumberSpecialValues = {
  "IV": 4,
  "IX": 9,
  "XL": 40,
  "XC": 90,
  "CD": 400,
  "CM": 900, 
}
  
export const checkForMultipleAppearence = (input) => (/(.)\1\1\1/).test(input);
  
export const validate = (input, value) => {
  if (checkForMultipleAppearence(input)) return false;
  if (value < 0) return false;

  return true;
}
  
export const RomanToNumber = (input) => {
  if (input.length < 2) return RomanNumberValues[input[0]];

  let number = 0;

  input.split('').map((letter, i) => {
    const currentLetterValue = RomanNumberValues[letter];
    
    if (i === 0) { number = currentLetterValue; return; }

    const lastLetter = input[i - 1];
    const lastLetterValue = RomanNumberValues[lastLetter];

    if (lastLetterValue < currentLetterValue) {
      const constructedLetters = lastLetter + letter;
      const constructedValue = RomanNumberSpecialValues[constructedLetters];
      
      // If it doesn't exist in the special values object
      // then we should remove from our current value the total value from before
      if (!constructedValue) {

        // If it's not in the special values object but the last letter
        // is still smaller than the current one, then we should subtract the value
        // of the last letter from the number and add up the difference between 
        // the current letter value and last letter value ( Eg. VVX -> 10 (5 + (10-5)) )
        if (lastLetterValue < currentLetterValue) {
          number -= lastLetterValue;
          number += currentLetterValue - lastLetterValue;

          return;
        }

        number = currentLetterValue - number;
        return;
      }

      number -= lastLetterValue;
      number += RomanNumberSpecialValues[constructedLetters]
      
      return;
    }

    number += currentLetterValue;

    return;
  });

  return number;
}
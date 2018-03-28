import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  validate,
  RomanToNumber,
  checkForMultipleAppearence,
  RomanNumberValues,
  RomanNumberSpecialValues
} from './utils';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('converter', () => {
  it(`checks if the Roman Numerals are correct`, () => {
    expect(RomanNumberValues).toEqual(
      {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
      }
    );
  })

  it(`checks if the Roman Special Numerals are correct`, () => {
    expect(RomanNumberSpecialValues).toEqual(
      {
        "IV": 4,
        "IX": 9,
        "XL": 40,
        "XC": 90,
        "CD": 400,
        "CM": 900, 
      }
    );
  })

  it(`converts a simple roman numeral (VII) 
  with no repetitions or special cases`, () => {
    expect(RomanToNumber("VII")).toEqual(7);
  })

  it(`converts a more complicated roman numeral (XIV) 
  with no repetitions but including special cases`, () => {
    expect(RomanToNumber("XIV")).toEqual(14);
  })

  it(`converts a more complicated roman numeral (XIV) 
  with repetitions and special cases`, () => {
    expect(RomanToNumber("XIVIII")).toEqual(17);
  })
  
  it(`checks if a normal roman numeral is validated correctly`, () => {
    const number = RomanToNumber("XVIII");
    expect(validate("XVIII", number)).toEqual(true);
  })

  it(`checks if a 4 times repetition is validated correctly`, () => {
    expect(validate("VIIIIXII", null)).toEqual(false);
  })

  it(`checks if the function finds multiple appearences of a letter more than 3 times`, () => {
    expect(checkForMultipleAppearence("VIIIIXII")).toEqual(true);
  })
});

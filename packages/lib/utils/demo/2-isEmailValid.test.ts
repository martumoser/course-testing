import * as Utils from './index';

describe('isEmailValid', () => {
  // it('should return true when it is a valid email', () => {
  //   const result = Utils.isEmailValid('martina.moser@radiumrocket.com');
  //   expect(result).toBe(true);
  // });

  // it('should return false when it is a invalid email', () => {
  //   const result = Utils.isEmailValid('martina.moser');
  //   expect(result).toBe(false);
  // });

  // it('should return false when the email is an object', () => {
  //   const result = Utils.isEmailValid({} as any);
  //   expect(result).toBe(false);
  // });

  // it('should return false when the email is an undefined', () => {
  //   const result = Utils.isEmailValid(undefined as any);
  //   expect(result).toBe(false);
  // });

  it.each`
    input                               | expected
    ${'martina.moser@radiumrocket.com'} | ${true}
    ${'martinamoser'}                   | ${false}
    ${0}                                | ${false}
    ${''}                               | ${false}
    ${{}}                               | ${false}
  `('takes input and returns expected', ({input, expected}) => {
    const actual = Utils.isEmailValid(input);
    expect(actual).toBe(expected);
  });
});

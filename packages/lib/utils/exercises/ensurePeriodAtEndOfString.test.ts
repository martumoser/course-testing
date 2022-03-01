import * as Utils from './index';

describe('Tests for ensurePeriodAtEndOfString', () => {
  it('verify that the if a string not ends with a period it will add one', () => {
    const str = 'My name is Martina';
    const func = Utils.ensurePeriodAtEndOfString(str);
    expect(func).toBe(`${str}.`);
  });

  it('should return the string if the it ends with a period', () => {
    const str = 'My name is Martina.';
    const func = Utils.ensurePeriodAtEndOfString(str);
    expect(func).toBe(str);
  });

  it('should return an empty string if there is no value', () => {
    const func = Utils.ensurePeriodAtEndOfString();
    expect(func).toBe('');
  });
});

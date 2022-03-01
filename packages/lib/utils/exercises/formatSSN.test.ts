import * as Utils from './index';

describe('Test for formatSSN', () => {
  it('should return an empty string if no value', () => {
    const func = Utils.formatSSN('' as any, '' as any);
    expect(func).toBe('');
  });

  it('should return a string of 9 digits as SSN', () => {
    const func = Utils.formatSSN('12345678900000', '1234567890');
    expect(func).toBe('1234567890');
  });
});

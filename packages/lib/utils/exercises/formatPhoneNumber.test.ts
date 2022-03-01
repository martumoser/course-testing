import * as Utils from './index';

describe('Test for formatPhoneNumber', () => {
  it('should return an empty string if there is no phone number', () => {
    const fucn = Utils.formatPhoneNumber();
    expect(fucn).toBe('-');
  });

  it('should return the phone number as USA format XXX-XXX-XXXX if you send a phone number string', () => {
    const fucn = Utils.formatPhoneNumber('1234567890');
    expect(fucn).toBe('123-456-7890');
  });

  it('should return the phone number as USA format XXX-XXX-XXXX if you send a phone number', () => {
    const fucn = Utils.formatPhoneNumber(1234567890);
    expect(fucn).toBe('123-456-7890');
  });

  it('should return - if you send a phone number with more or less numbers than 10', () => {
    const fucn = Utils.formatPhoneNumber(123456789011);
    expect(fucn).toBe('-');
  });
});

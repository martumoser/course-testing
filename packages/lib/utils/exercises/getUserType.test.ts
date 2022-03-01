import * as Utils from './index';

describe('Tests for getUserType', () => {
  it('should return admin if the email contains @radiumrocket.com', () => {
    const email = 'martina.moser@radiumrocket.com';
    const func = Utils.getUserType(email);
    expect(func).toBe('admin');
  });

  it('should return user if the email does not contains @radiumrocket.com', () => {
    const email = 'martina.moser@gmail.com';
    const func = Utils.getUserType(email);
    expect(func).toBe('user');
  });

  it('should return user if there is no email', () => {
    const func = Utils.getUserType();
    expect(func).toBe('user');
  });
});

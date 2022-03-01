import * as Utils from './index';

const user = {
  firstName: 'Martina',
  lastName: 'Moser',
};
describe('Test for getFullName', () => {
  it('should return the user full name', () => {
    const func = Utils.getFullName(user);
    expect(func).toBe(user);
  });

  it('should return the user full name if only send the first name', () => {
    const func = Utils.getFullName({firstName: 'Martina', lastName: ''});
    expect(func).toBe(user);
  });

  it('should return the user full name if only send the last name', () => {
    const func = Utils.getFullName({firstName: '', lastName: 'Moser'});
    expect(func).toBe(user);
  });

  it('should return an empty string if no user is send', () => {
    const func = Utils.getFullName({
      firstName: '',
      lastName: '',
    });
    expect(func).toBe('');
  });

  it('should return an empty string if no user is send', () => {
    const func = Utils.getFullName({} as any);
    expect(func).toBe('');
  });
});

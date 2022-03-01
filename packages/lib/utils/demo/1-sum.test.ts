import * as Utils from './index';

describe('sum', () => {
  const warnSpy = jest.spyOn(console, 'warn').mockImplementation(jest.fn());
  it('should return 11 when a=4 and b=7', () => {
    const result = Utils.sum(4, 7);

    expect(result).toBe(11);
  });

  it('should return 0 and print console warn when a=string and b=7', () => {
    const result = Utils.sum('test' as any, 7);

    expect(result).toBe(0);
    expect(warnSpy).toHaveBeenCalled();
    expect(warnSpy).toHaveBeenCalledTimes(1);
    expect(warnSpy).toHaveBeenCalledWith('test is not a number');
  });

  it('should return 0 and print console warn when a=4 and b=string', () => {
    const result = Utils.sum(4, 'test' as any);

    expect(result).toBe(0);
    expect(warnSpy).toHaveBeenCalled();
    expect(warnSpy).toHaveBeenCalledWith('test is not a number');
  });
});

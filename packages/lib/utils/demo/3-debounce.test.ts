import * as Utils from './index';

describe('debounce', () => {
  it('should call the function only once when debounce is called multiple times within an interval less than 1000', async () => {
    const func = jest.fn();
    const debounce = () => Utils.debounce(func);
    debounce();

    expect(func).toBeCalledTimes(0);
    for (let index = 0; index < 5; index++) {
      debounce();
    }

    // eslint-disable-next-line promise/param-names
    await new Promise(r => setTimeout(r, 1200));
    expect(func).toBeCalledTimes(1);
  });
});

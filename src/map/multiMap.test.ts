import { snakeCase, toUpper } from 'lodash';
import { multiMap } from './multiMap';

describe(multiMap, () => {
  it('executes each function in the list in an array, on an array in order', () => {
    const mockSnakeCase = jest.fn().mockImplementation(snakeCase);
    const mockToUpper = jest.fn().mockImplementation(toUpper);
    const mockReplacer = jest.fn().mockImplementation((str: string) => str.replace('CAMEL', 'SNAKE'));

    const str = 'ThisIsCamelCase';

    const result = multiMap([str], [mockSnakeCase, mockToUpper, mockReplacer]);
    const expected = ['THIS_IS_SNAKE_CASE'];

    expect(result).toEqual(expected);

    expect(mockSnakeCase).toHaveBeenNthCalledWith(1, str);
    expect(mockToUpper).toHaveBeenNthCalledWith(1, snakeCase(str));
    expect(mockReplacer).toHaveBeenNthCalledWith(1, toUpper(snakeCase(str)));
  });
});

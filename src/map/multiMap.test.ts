import { snakeCase, toUpper } from 'lodash';
import { multiMap, multiMapFP } from './multiMap';

describe(multiMap, () => {
  it('executes each function in the list in an array, on an array in order', () => {
    const mockSnakeCase = jest.fn().mockImplementation(snakeCase);
    const mockToUpper = jest.fn().mockImplementation(toUpper);
    const mockReplacer = jest.fn().mockImplementation((str: string) => str.replace('CAMEL', 'SNAKE'));

    const str = 'ThisIsCamelCase';

    const result = multiMap<string, string>([str], [mockSnakeCase, mockToUpper, mockReplacer]);
    const expected = ['THIS_IS_SNAKE_CASE'];

    expect(result).toEqual(expected);

    expect(mockSnakeCase).toHaveBeenCalledTimes(1);
    expect(mockToUpper).toHaveBeenCalledTimes(1);
    expect(mockReplacer).toHaveBeenCalledTimes(1);
  });
  it('executes each function in the var args, on an array in order', () => {
    const mockSnakeCase = jest.fn().mockImplementation(snakeCase);
    const mockToUpper = jest.fn().mockImplementation(toUpper);
    const mockReplacer = jest.fn().mockImplementation((str: string) => str.replace('CAMEL', 'SNAKE'));

    const str = 'ThisIsCamelCase';

    const result = multiMap([str], mockSnakeCase, mockToUpper, mockReplacer);
    const expected = ['THIS_IS_SNAKE_CASE'];

    expect(result).toEqual(expected);

    expect(mockSnakeCase).toHaveBeenCalledTimes(1);
    expect(mockToUpper).toHaveBeenCalledTimes(1);
    expect(mockReplacer).toHaveBeenCalledTimes(1);
  });
  it('executes each function in the var args, on object in order', () => {
    const mockSnakeCase = jest.fn().mockImplementation(snakeCase);
    const mockToUpper = jest.fn().mockImplementation(toUpper);
    const mockReplacer = jest.fn().mockImplementation((str: string) => str.replace('CAMEL', 'SNAKE'));

    const str = 'ThisIsCamelCase';

    const obj = {
      foo: str,
    };

    const result = multiMap(obj, mockSnakeCase, mockToUpper, mockReplacer);
    const expected = ['THIS_IS_SNAKE_CASE'];

    expect(result).toEqual(expected);

    expect(mockSnakeCase).toHaveBeenCalledTimes(1);
    expect(mockToUpper).toHaveBeenCalledTimes(1);
    expect(mockReplacer).toHaveBeenCalledTimes(1);
  });
});

describe(multiMapFP, () => {
  it('executes each function in the list in an array, on an array in order', () => {
    const mockSnakeCase = jest.fn().mockImplementation(snakeCase);
    const mockToUpper = jest.fn().mockImplementation(toUpper);
    const mockReplacer = jest.fn().mockImplementation((str: string) => str.replace('CAMEL', 'SNAKE'));

    const str = 'ThisIsCamelCase';

    const result = multiMapFP<string, string>([mockSnakeCase, mockToUpper, mockReplacer])([str]);
    const expected = ['THIS_IS_SNAKE_CASE'];

    expect(result).toEqual(expected);

    expect(mockSnakeCase).toHaveBeenCalledTimes(1);
    expect(mockToUpper).toHaveBeenCalledTimes(1);
    expect(mockReplacer).toHaveBeenCalledTimes(1);
  });
  it('executes each function in the var args, on an array in order', () => {
    const mockSnakeCase = jest.fn().mockImplementation(snakeCase);
    const mockToUpper = jest.fn().mockImplementation(toUpper);
    const mockReplacer = jest.fn().mockImplementation((str: string) => str.replace('CAMEL', 'SNAKE'));

    const str = 'ThisIsCamelCase';

    const result = multiMapFP(mockSnakeCase, mockToUpper, mockReplacer)([str]);
    const expected = ['THIS_IS_SNAKE_CASE'];

    expect(result).toEqual(expected);

    expect(mockSnakeCase).toHaveBeenCalledTimes(1);
    expect(mockToUpper).toHaveBeenCalledTimes(1);
    expect(mockReplacer).toHaveBeenCalledTimes(1);
  });
});

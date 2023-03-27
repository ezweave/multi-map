import { flow, map, orderBy, range, size, snakeCase, sum, toUpper } from 'lodash';
import { map as mapFP } from 'lodash/fp';
import { City } from 'country-state-city';
import PI from 'pi';

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

describe('performance', () => {
  it('out performs similar operations, over multiple maps', () => {
    const pi = PI(32, false);
    const slowFloatingPointOperation = (n: number) => (n * pi) / pi;
    const expensiveDecorator = (label: string, index: number) => `${label}_${slowFloatingPointOperation(index)}`;

    const testDataSet = map(City.getAllCities(), (city) => `${city.name}_${city.stateCode}_${city.countryCode}`);

    const multiMapTest = multiMapFP<string, string>(snakeCase, toUpper, expensiveDecorator);
    const mapTest = flow(
      mapFP(snakeCase),
      mapFP(toUpper),
      mapFP(expensiveDecorator),
    );

    interface Metric {
      time: number,
      data: string[],
    }

    const getMapTime = (): Metric => {
      const startTimeMap = Date.now();
      const mapTestOutput = mapTest(testDataSet) as unknown as string[]; // NOTE: TS has trouble interpreting this type
      return {
        data: mapTestOutput,
        time: Date.now() - startTimeMap,
      };
    };

    const getMultiMapTime = (): Metric => {
      const startTimeMultiMap = Date.now();
      const multiMapTestOutput = multiMapTest(testDataSet);
      return {
        data: multiMapTestOutput,
        time: Date.now() - startTimeMultiMap,
      };
    };

    const n = 100;
    const nArray = range(0, n);
    const multiMapMetrics = map(nArray, getMultiMapTime);
    const mapMetrics = map(nArray, getMapTime);

    const mapMetricsOutput = map(mapMetrics, ({ data }) => data)[0];
    const multiMapMetricsOutput = map(multiMapMetrics, ({ data }) => data)[0];

    expect(mapMetricsOutput).toEqual(multiMapMetricsOutput);

    const getTimes = flow(
      mapFP(({ time }) => time),
      orderBy,
    );

    const getPN = (num: number) => (metrics: Metric[]) => {
      const times = getTimes(metrics);
      const middleIndex = Math.ceil(size(times) * (num / 100));
      return times[middleIndex];
    };

    const getAverage = (metrics: Metric[]) => {
      const times = getTimes(metrics);
      return sum(times) / size(times);
    };

    const getP50 = getPN(50);
    const getP99 = getPN(99);

    const p50Map = getP50(mapMetrics);
    const p50MultiMap = getP50(multiMapMetrics);
    const p99Map = getP99(mapMetrics);
    const p99MultiMap = getP99(multiMapMetrics);
    const averageMap = getAverage(mapMetrics);
    const averageMultiMap = getAverage(multiMapMetrics);

    console.warn('METRICS', {
      dataSetSize: size(City.getAllCities()),
      n,
    }, 'MAP', {
      p50Map,
      p99Map,
      averageMap,
    }, 'MULTIMAP', {
      p50MultiMap,
      p99MultiMap,
      averageMultiMap,
    });
  });
});

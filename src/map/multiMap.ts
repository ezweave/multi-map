import { MultiMap } from './types';
import { flow, map } from 'lodash';

export const multiMap: MultiMap['multiMap'] = (
  collection,
  ...functions
) => map(collection, flow(...functions));

export const multiMapFP: MultiMap['multiMapFP'] = <I extends any, O>(
  ...functions
) => (
    collection,
  ) => multiMap<I, O>(collection, ...functions);

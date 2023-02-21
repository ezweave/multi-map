import { MultiMap, MultiMapFP } from './types';
import { flow, map } from 'lodash';
import { tap } from 'lodash/fp';

export const multiMap: MultiMap['multiMap'] = (
  collection,
  ...functions
) => map(collection, (value, keyOrIndex) => {
  return flow(
    tap(n => console.warn('BEFORE', n)),
    ...functions,
    tap(n => console.warn('AFTER', n)),
  )(value, keyOrIndex);
});

export const multiMapFP: MultiMapFP['multiMapFP'] = <I extends any, O>(
  ...functions
) => (
  collection,
) => multiMap<I, O>(collection, ...functions);

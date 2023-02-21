import { Many } from './Many';

export interface MultiMap {
  multiMap<I extends object, R1, R2, R3, R4, R5, R6, R7>(collection: I, f1: (a: I) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): R7;
  multiMap<I extends object, R1, R2, R3, R4, R5, R6>(collection: I, f1: (a: I) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): R6;
  multiMap<I extends object, R1, R2, R3, R4, R5>(collection: I, f1: (a: I) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): R5;
  multiMap<I extends object, R1, R2, R3, R4>(collection: I, f1: (a: I) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): R4;
  multiMap<I extends object, R1, R2, R3>(collection: I, f1: (a: I) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3): R3;
  multiMap<I extends object, R1, R2>(collection: I, f1: (a: I) => R1, f2: (a: R1) => R2): R2;
  multiMap<I extends object, R1>(collection: I, f1: (a: I) => R1): R1;
  multiMap<I extends object, O>(collection: I, ...functions: Function[]): O;
  multiMap<I extends object, O>(collection: I, functions: Function[]): O;
  multiMap<I extends any, R1, R2, R3, R4, R5, R6, R7>(collection: I | I[], f1: (a: I) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): R7;
  multiMap<I extends any, R1, R2, R3, R4, R5, R6>(collection: I[], f1: (a: I) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): R6;
  multiMap<I extends any, R1, R2, R3, R4, R5>(collection: I[], f1: (a: I) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): R5;
  multiMap<I extends any, R1, R2, R3, R4>(collection: I[], f1: (a: I) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): R4;
  multiMap<I extends any, R1, R2, R3>(collection: I[], f1: (a: I) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3): R3;
  multiMap<I extends any, R1, R2>(collection: I[], f1: (a: I) => R1, f2: (a: R1) => R2): R2;
  multiMap<I extends any, R1>(collection: I[], f1: (a: I) => R1): R1;
  multiMap<I extends any, O>(collection: I[], ...functions: Function[]): O;
  multiMap<I extends any, O>(collection: I[], functions: Function[]): O;
  // multiMap<I extends object, O extends object>(collection: I[], ...func: Function[]): O;
  // multiMap<I extends object, O extends object>(collection: I[], ...func: Function[]): O[];
  // multiMap<I extends object, O extends object>(collection: I, ...func: Function[]): O[];
  // multiMap<I extends object, O extends object>(collection: I, ...func: Function[]): O;
}

export interface MultiMapFP {
  multiMapFP<I extends any[], R1, R2, R3, R4, R5, R6, R7>(f1: (a: I) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): (collection: I) => R7;
  multiMapFP<I extends any[], R1, R2, R3, R4, R5, R6>(f1: (a: I) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): (collection: I) => R6;
  multiMapFP<I extends any[], R1, R2, R3, R4, R5>(f1: (a: I) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): (collection: I) => R5;
  multiMapFP<I extends any[], R1, R2, R3, R4>(f1: (a: I) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): (collection: I) => R4;
  multiMapFP<I extends any[], R1, R2, R3>(f1: (a: I) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3): (collection: I) => R3;
  multiMapFP<I extends any[], R1, R2>(f1: (a: I) => R1, f2: (a: R1) => R2): (collection: I) => R2;
  multiMapFP<I extends object, R1, R2, R3, R4, R5, R6, R7>(f1: (a: I) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): (collection: I) => R7;
  multiMapFP<I extends object, R1, R2, R3, R4, R5, R6>(f1: (a: I) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): (collection: I) => R6;
  multiMapFP<I extends object, R1, R2, R3, R4, R5>(f1: (a: I) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): (collection: I) => R5;
  multiMapFP<I extends object, R1, R2, R3, R4>(f1: (a: I) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): (collection: I) => R4;
  multiMapFP<I extends object, R1, R2, R3>(f1: (a: I) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3): (collection: I) => R3;
  multiMapFP<I extends object, R1, R2>(f1: (a: I) => R1, f2: (a: R1) => R2): (collection: I) => R2;
  multiMapFP<I extends object, O extends object>(...func: Array<Many<(...args: any[]) => any>>): (collection: I[]) => O;
  multiMapFP<I extends object, O extends object>(...func: Array<Many<(...args: any[]) => any>>): (collection: I[]) => O[];
  multiMapFP<I extends object, O extends object>(...func: Array<Many<(...args: any[]) => any>>): (collection: I) => O[];
  multiMapFP<I extends object, O extends object>(...func: Array<Many<(...args: any[]) => any>>): (collection: I) => O;
}

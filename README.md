# multi-map

Map or reduce operators that take a set of iteratees for each step

## Table of Contents

- [Introduction](#introduction)
- [Peformance](#performance)
- [Usage](#usage)

## Introduction

If you _must_ be as effiecient as possible and you're dealing with multiple `map` operations, effectively:

```js
const afterOneFn = map(data, fn1);
const afterTwoFn = map(afterOneFn, fn2);
...
return map(afterNFn, fnN);
```

You can use `multiMap` instead to get some pretty marginal gains:

```js
return multiMap(data, fn1, fn2, ..., fnN);
```

The idea is simply that instead of calling a `map` operation over a data set `n` times, you just call it once and apply your functions to each _iteratee_.

[Home](#table-of-contents)

## Performance

There's some testing in here that is hardly scientific (there's some bias to whichever one is second), where we are running some functions over a large data set (cities around the world);

You can test it yourself by running `yarn test`, but the output is roughly as follows:

| Method     | DataSet Size | Number of Runs | p50 (in milliseconds) | p99 (in milliseconds) | average (in milliseconds) |
| ---------- | ------------ | -------------- | --------------------- | --------------------- | ------------------------- |
| `map`      | 148040       | 100            | 171                   | 3003                  | 283.37                    |
| `multiMap` | 148040       | 100            | 145                   | 569                   | 148.39                    |

As you can see, the gains are mostly marginal. But if you must _"trim that fat..."_

![](./docs/img/ordell.png)

[Home](#table-of-contents)

## Usage

There's two variants available, `multiMap` and `multiMapFP`. They are functionaly the same, only the `FP` variant changes the _-arity_ and curries out the input.

E.g. these are equivalent:

```js
import { multiMap, multiMapFP } from "multi-map";

multiMap(data, fn1, fn2, fn3);
multiMapFP(fn1, fn2, fn3)(data);
```

[Home](#table-of-contents)

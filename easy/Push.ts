type Result1 = Push<[1, 2], "3">; // [1, 2, '3']

type Push<T extends any[], P> = [...T, P];

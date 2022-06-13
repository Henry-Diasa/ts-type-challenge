type Result2 = Unshift<[1, 2], 0>; // [0, 1, 2,]

type Unshift<T extends any[], K> = [K, ...T];

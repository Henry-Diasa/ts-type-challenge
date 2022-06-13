// 实现类型 Exclude<T, U>，返回 T 中不存在于 U 的部分

type C = MyExclude<"a" | "b", "a" | "c">; // 'b'

type MyExclude<T, U> = T extends U ? never : T;

// TS 对联合类型的执行是分配律的

/**
 *
    Exclude<'a' | 'b', 'a' | 'c'>
    // 等价于
    Exclude<'a', 'a' | 'c'> | Exclude<'b', 'a' | 'c'>
 */

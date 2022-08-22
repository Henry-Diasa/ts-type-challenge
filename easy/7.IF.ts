// 实现类型 If<Condition, True, False>，当 C 为 true 时返回 T，否则返回 F：

type A = If<true, "a", "b">; // expected to be 'a'
type B = If<false, "a", "b">; // expected to be 'b'

// extends true 来判断true值
type If<C, T, F> = C extends true ? T : F;

type af = EndsWith<"abc", "bc">; // expected to be true
type bf = EndsWith<"abc", "abc">; // expected to be true
type cff = EndsWith<"abc", "d">; // expected to be false

// 本题答案
type EndsWith<T extends string, U extends string> = T extends `${string}${U}`
  ? true
  : false;

// 实现 LookUp<T, P>，从联合类型 T 中查找 type 为 P 的项并返回：
interface Cat {
  type: "cat";
  breeds: "Abyssinian" | "Shorthair" | "Curl" | "Bengal";
}

interface Dog {
  type: "dog";
  breeds: "Hound" | "Brittany" | "Bulldog" | "Boxer";
  color: "brown" | "white" | "black";
}

type MyDog = LookUp<Cat | Dog, "dog">; // expected to be `Dog`

type LookUp<T, P> = T extends {
  type: infer U;
}
  ? U extends P
    ? T
    : never
  : never;
// 本题答案 更优雅
/* 
在泛型处利用 extends { type: any }、extends U['type'] 直接锁定入参类型，让错误校验更早发生。
T extends U['type'] 精确缩小了参数 T 范围，可以学到的是，之前定义的泛型 U 可以直接被后面的新泛型使用。
U extends { type: T } 是一种新的思考角度。在第一个答案中，我们的思维方式是 “找到对象中 type 值进行判断”，而第二个答案直接用整个对象结构 { type: T } 判断，是更纯粹的 TS 思维。
*/
// type LookUp<U extends { type: any }, T extends U['type']> = U extends { type: T } ? U : never

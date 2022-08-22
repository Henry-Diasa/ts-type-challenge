declare const config: Chainable;

const result = config
  .option("foo", 123)
  .option("name", "type-challenges")
  .option("bar", { value: "Hello World" })
  .get();

// expect the type of result to be:
interface Result5 {
  foo: number;
  name: string;
  bar: {
    value: string;
  };
}

// 本题答案
type Chainable<Result = {}> = {
  option: <K extends string, V>(
    key: K,
    value: V
  ) => Chainable<
    Result & {
      [P in K]: V;
      /* 
      一个变量也需要使用in 来取这个值 而不能这样
      // 这是错的，因为描述了一大堆类型
      {
        [K] : V
      }
      // 这也是错的，这个 K 就是字面量 K，而非你希望的类型指代
      {
        K: V
      }
      */
    }
  >;
  get: () => Result;
};

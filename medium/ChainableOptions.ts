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
    }
  >;
  get: () => Result;
};

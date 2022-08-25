// 用 TS 实现 MinusOne 将一个数字减一：
type Zero = MinusOne<1>; // 0
type FiftyFour = MinusOne<55>; // 54

type MinusOne<T extends number, arr extends any[] = []> = [
  ...arr,
  ""
]["length"] extends T
  ? arr["length"]
  : MinusOne<T, [...arr, ""]>;

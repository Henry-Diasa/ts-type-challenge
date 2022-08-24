// 实现 ReplaceKeys<Obj, Keys, Targets> 将 Obj 中每个对象的 Keys Key 类型转化为符合 Targets 对象对应 Key 描述的类型，如果无法匹配到 Targets 则类型置为 never：
type NodeA = {
  type: "A";
  name: string;
  flag: number;
};

type NodeB = {
  type: "B";
  id: number;
  flag: number;
};

type NodeC = {
  type: "C";
  name: string;
  flag: number;
};

type Nodes = NodeA | NodeB | NodeC;

type ReplacedNodes = ReplaceKeys<
  Nodes,
  "name" | "flag",
  { name: number; flag: string }
>; // {type: 'A', name: number, flag: string} | {type: 'B', id: number, flag: string} | {type: 'C', name: number, flag: string} // would replace name from string to number, replace flag from number to string.

type ReplacedNotExistKeys = ReplaceKeys<Nodes, "name", { aa: number }>; // {type: 'A', name: never, flag: number} | NodeB | {type: 'C', name: never, flag: number} // would replace name to never

// 本题答案
type ReplaceKeys<Obj, Keys, Targets> = {
  [K in keyof Obj]: K extends Keys
    ? K extends keyof Targets
      ? Targets[K]
      : never
    : Obj[K];
};

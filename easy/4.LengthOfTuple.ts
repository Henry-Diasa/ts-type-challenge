type tesla = ["tesla", "model 3", "model X", "model Y"];
type spaceX = [
  "FALCON 9",
  "FALCON HEAVY",
  "DRAGON",
  "STARSHIP",
  "HUMAN SPACEFLIGHT"
];

type teslaLength = Length<tesla>; // expected 4
type spaceXLength = Length<spaceX>; // expected 5

// 对 TS 来说，元组和数组都是数组，但元组对 TS 来说可以观测其长度，T['length'] 对元组来说返回的是具体值，而对数组来说返回的是 number
type Length<T extends any[]> = T["length"];

// 实现 OmitByType<T, U> 根据类型 U 排除 T 中的 Key：
type OmitBoolean = OmitByType<
  {
    name: string;
    count: number;
    isReadonly: boolean;
    isEnable: boolean;
  },
  boolean
>; // { name: string; count: number }

type OmitByType<T, U> = {
  [K in keyof T as T[K] extends U ? never : K]: T[K];
};

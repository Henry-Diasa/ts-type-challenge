// 实现 TS 版二叉树中序遍历
const tree1 = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: null,
  },
} as const;
type Af = InorderTraversal<typeof tree1>; // [1, 3, 2]

// 本题答案
interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}
// [T] extends [null] ? [] : xx 这样是不可以的 这么写会发现 TS 抛出了异常，因为 TS 不能确定 T 此时符合 TreeNode 类型
type InorderTraversal<T extends TreeNode | null> = [T] extends [TreeNode]
  ? [...InorderTraversal<T["left"]>, T["val"], ...InorderTraversal<T["right"]>]
  : [];

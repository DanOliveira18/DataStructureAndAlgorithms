// Given the root of a binary tree, return the inorder traversal of its nodes' values.
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function recursiveInorde(node: TreeNode | null, arr: number[]) {
  if (node) {
    recursiveInorde(node.left, arr);
    arr.push(node.val);
    recursiveInorde(node.right, arr);
  }
}

function inorderTraversal(root: TreeNode | null): number[] {
  let result: number[] = [];
  recursiveInorde(root, result);
  return result;
}

// nodo = node, i can't use the word node
class Nodo {
  public left: Nodo;
  public right: Nodo;
  public value: number;

  constructor(value: number) {
    this.value = value;
  }
}

class BinaryTree {
  private root: Nodo;

  constructor(value: number) {
    this.root = new Nodo(value);
  }

  public insert(value: number) {
    this.insertRecursive(value, this.root);
  }

  private insertRecursive(value: number, node: Nodo) {
    if (value > node.value) {
      node.right
        ? this.insertRecursive(value, node.right)
        : (node.right = new Nodo(value));
    } else {
      // items repetidos são jogados para a esquerda
      node.left
        ? this.insertRecursive(value, node.left)
        : (node.left = new Nodo(value));
    }
  }

  public search(value: number): number {
    return this.searchRecursive(this.root, value);
  }

  private searchRecursive(node: Nodo, value: number): number {
    if (!node) {
      return -1;
    }
    if (value === node.value) {
      return value;
    } else if (value < node.value) {
      return this.searchRecursive(node.left, value);
    } else {
      return this.searchRecursive(node.right, value);
    }
  }

  public preorder(): number[] {
    let result = [];
    this.recursivePreorder(this.root, result);
    return result;
  }

  private recursivePreorder(node: Nodo, result: number[]) {
    if (node) {
      result.push(node.value);
      this.recursivePreorder(node.left, result);
      this.recursivePreorder(node.right, result);
    }
  }

  public inorder(): number[] {
    let result = [];
    this.recursiveinorder(this.root, result);
    return result;
  }

  private recursiveinorder(node: Nodo, result: number[]) {
    if (node) {
      this.recursiveinorder(node.left, result);
      result.push(node.value);
      this.recursiveinorder(node.right, result);
    }
  }

  public postorder(): number[] {
    let result = [];
    this.recursivepostorder(this.root, result);
    return result;
  }

  private recursivepostorder(node: Nodo, result: number[]) {
    if (node) {
      this.recursivepostorder(node.left, result);
      this.recursivepostorder(node.right, result);
      result.push(node.value);
    }
  }
}

const binaryTree = new BinaryTree(5);
binaryTree.insert(3);
binaryTree.insert(1);
binaryTree.insert(10);
binaryTree.insert(15);
binaryTree.insert(7);

console.log(binaryTree.preorder());
console.log(binaryTree.inorder());
console.log(binaryTree.postorder());

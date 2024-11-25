## Binary Trees

Binary trees are a data structure where you have nodes composed of a value, a left node and a right node. The first node in the tree is called the root, each root can have one or two children, and nodes that do not have children are called leaves, in the image below you can see what a binary tree looks like.

![binary Tree](https://hermes.dio.me/articles/cover/b6e7dc1f-9ae1-43dc-a513-e95e19f250ab.png)

In this scenario, element "1" is the root of the tree and it has two children ["2", "5"], element "2" in turn is a child of element "1", so we can say that element "1" is the parent of element "2", and it has two children ["3", "4"], however elements "3" and "4" do not have children, so they are leaves of this tree, as is element "5".

In my implementation, in the binaryTree.ts file, I made a partially balanced tree, where the left element will always be smaller than the node value, and the right element will always be larger than the node value.

### Methods

#### Insert

Insertion into a binary tree is always done either in the left node or in the right node. A partially balanced tree will follow a logic, for example where the left node will always have smaller elements than the right node, and the right node will always have larger elements than the left node. An unbalanced tree does not follow an insertion pattern. The nodes are only checked to see if they exist on the left or right and are inserted in that position. However, this can end up creating a tree that only exists in one direction, which makes it performantly poor.

#### Preorder traversal

Traversals are ways to traverse the tree. Preorder traversal seeks to visit the current node first, then the node to the left and then the node to the right. By doing this recursively you will be able to return the entire binary tree.

#### Inorder traversal

Inorder traversal traverses a tree by visiting the left subtree first, then the current node, and finally the right subtree.

#### Postorder traversal

Postorder traversal traverses a tree by visiting first the left subtree, then the right, and finally the current node.

class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(value) {
    const childNode = new TreeNode(value);
    this.children.push(childNode);
    return childNode;
  }

  removeChild(value) {
    this.children = this.children.filter((child) => child.value !== value);
  }

  traverseBreadthFirst() {
    let output = [];
    let queue = [this]; // to process all nodes in the tree
    // while we have nodes in the queue
    while (queue.length > 0) {
      let levelSize = queue.length;
      let levelValues = [];
      for (let i = 0; i < levelSize; i++) {
        let node = queue.shift(); // extract each node from queue (left to right)
        levelValues.push(node.value); // value gets added to output
        queue.push(...node.children); // children gets added to queue (at the end)
      }
      output.push(levelValues);
    }
    console.log(output);
  }

  traverseDepthFirst() {
    console.log(this.value);
    this.children.forEach((child) => child.traverseDepthFirst());
  }
}

const testTree = new TreeNode(3);
const child1 = testTree.addChild(9);
const child2 = testTree.addChild(20);
child1.addChild(6);
child2.addChild(15);
const enkel = child2.addChild(7);
enkel.addChild(4);
testTree.traverseBreadthFirst();
testTree.traverseDepthFirst();

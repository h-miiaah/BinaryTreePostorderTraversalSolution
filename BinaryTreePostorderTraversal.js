/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var postorderTraversal = function(root) {
    let res = [];
    if (root === null) return res;
    let stack = [];

    stack.push(root);
    while (stack.length !== 0) { 
        let cur = stack.pop();
        res.push(cur.val); 
        if (cur.left) stack.push(cur.left);
        if (cur.right) stack.push(cur.right);
    }
    return res.reverse();
};



/*

- We first push the root node into the stack.
- Then we start a while loop with the condition stack.length !== 0.
- Inside the loop, we pop the last element from the stack and push it into the result array.
- After that, we check if the popped element has a left child and push it into the stack.
- We also check if the popped element has a right child and push it into the stack.


*/
---
id: algorithm-advance
title: 算法进阶
tags:
  - 算法
---

### 图论

**DFS 🔼**

板子：遍历二叉树的路径

```
var dfs = (node, visited) => {
    if(!node){
        return;
    }
    visited.push(node.val);
if(!node.left && !node.right){
    const path = visited.slice();
    console.log(path);
}
dfs(node.left, visited);
dfs(node.right, visited);
visited.pop();
}
```

BFS 🔼

邻接表 & 邻接矩阵

### 贪心算法

### 动态规划

### 数组

    双指针
    滑动窗口（类似双指针）

### 队列

### 栈

### 二叉树

    递归很多时候可以与二叉树相结合！
    构造二叉树类题目，用前序遍历构造
    二叉搜索树
        中序遍历有序（所以一般二叉搜索树类题目都用中序遍历）

### 并查集 🔼

### 二分查找 🔼

### 排列组合 🔼

### 前缀和 🔼

    差分

### 动态规划 🔼

    动规五部曲
        1.dp数组含义
        2.递推公式
        3.初始化
        4.遍历顺序
        5.打印验证

    01背包问题 🔼
        递推公式（二维）：dp[i][j] = max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i]);

        递推公式（一维）：dp[j] = max(dp[j], dp[j - weight[i]] + value[i]);

        递推公式变形：dp[j] += dp[j - nums[i]

    完全背包问题
        最大价值/是否能装满 =》遍历顺序都可

        装满背包多少种方法，组合数 =》 遍历顺序-先物品再背包

        装满背包多少种方法，排列数 =》 遍历顺序-先背包再物品

        求给定背包容量，最少物品数

### 数论 🔼

### KMP 🔼

### 链表

    创建虚拟头节点

**4.8lqb，最近在学习前端，算法基本没有进展 😣**

**2023.04.08 算法相关暂时不更了，沉淀沉淀**

import React, { useState } from "react";
import {
  addLevelIdsToTree,
  deleteTreeNode,
  updateTreeDataWithNewNode,
} from "../utils/treeUtils";

export const useTree = (initialTreeData) => {
  const [treeData, setTreeData] = useState(addLevelIdsToTree(initialTreeData));

  const addNode = (nodeName, nodeParentLevelId) => {
    const newNode = { node: nodeName, children: [] };
    const newTreeData = updateTreeDataWithNewNode(
      treeData,
      nodeParentLevelId,
      newNode
    );
    setTreeData(newTreeData);
  };

  const deleteNode = (levelId) => {
    const newTreeData = deleteTreeNode(treeData, levelId);
    setTreeData(newTreeData);
  };

  return { treeData, addNode, deleteNode };
};

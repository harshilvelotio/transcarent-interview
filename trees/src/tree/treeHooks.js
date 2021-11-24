import React, { useState } from "react";
import {
  addLevelIdsToTree,
  alphabetiseTreeData,
  deleteTreeNode,
  updateTreeDataWithNewNode,
} from "../utils/treeUtils";

export const useTree = (initialTreeData) => {
  const [treeData, setTreeData] = useState(addLevelIdsToTree(initialTreeData));
  const [originalTreeData, setOriginalTreeData] = useState(
    addLevelIdsToTree(initialTreeData)
  );
  const [shouldAlphabetiseTree, setShouldAlphabetiseTree] = useState(false);

  const addNode = (nodeName, nodeParentLevelId) => {
    const newNode = { node: nodeName, children: [] };
    const newTreeData = updateTreeDataWithNewNode(
      treeData,
      nodeParentLevelId,
      newNode
    );
    setTreeData(newTreeData);
    setOriginalTreeData(newTreeData);
  };

  const deleteNode = (levelId) => {
    setShouldAlphabetiseTree(false);
    const newTreeData = deleteTreeNode(treeData, levelId);
    setTreeData(newTreeData);
    setOriginalTreeData(newTreeData);
  };

  const alphabetiseTree = () => {
    if (shouldAlphabetiseTree) {
      setTreeData(originalTreeData);
      setShouldAlphabetiseTree(false);
      return;
    }
    const alphabetisedTree = alphabetiseTreeData(treeData);
    setTreeData(alphabetisedTree);
    setShouldAlphabetiseTree(true);
  };

  return {
    treeData,
    addNode,
    deleteNode,
    alphabetiseTree,
    shouldAlphabetiseTree,
  };
};

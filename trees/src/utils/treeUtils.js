export const addLevelIdsToTree = (treeData, parentLabel = "") =>
  treeData.map((currentTreeData, index) => {
    const currentNodeLevelId = `${parentLabel ? `${parentLabel}.` : ""}${
      index + 1
    }`;
    return {
      node: currentTreeData.node,
      levelId: currentNodeLevelId,
      children: addLevelIdsToTree(currentTreeData.children, currentNodeLevelId),
    };
  });

export const updateTreeDataWithNewNode = (treeData, levelId, newNode) => {
  return treeData.map((currentTreeData) => {
    const mutableCurrentTreeData = { ...currentTreeData };
    if (currentTreeData.levelId === levelId) {
      const mutableNewNode = { ...newNode };
      mutableNewNode.levelId = `${levelId ? `${levelId}.` : ""}${
        currentTreeData.children.length + 1
      }`;
      mutableCurrentTreeData.children = [
        ...mutableCurrentTreeData.children,
        mutableNewNode,
      ];
    } else {
      mutableCurrentTreeData.children = updateTreeDataWithNewNode(
        mutableCurrentTreeData.children,
        levelId,
        newNode
      );
    }
    return mutableCurrentTreeData;
  });
};

export const deleteTreeNode = (treeData, levelId) => {
  if (!levelId.includes(".")) {
    return treeData.filter(
      (currentTreeData) => currentTreeData.levelId !== levelId
    );
  }
  const parentLevelIdArray = levelId.split(".");
  const parentLevelId = parentLevelIdArray
    .slice(0, parentLevelIdArray.length - 1)
    .join(".");
  return treeData.map((currentTreeData) => {
    const mutableCurrentTreeData = { ...currentTreeData };
    if (mutableCurrentTreeData.levelId === parentLevelId) {
      mutableCurrentTreeData.children = mutableCurrentTreeData.children.filter(
        (currentChildrenData) => currentChildrenData.levelId !== levelId
      );
    } else {
      mutableCurrentTreeData.children = deleteTreeNode(
        mutableCurrentTreeData.children,
        levelId
      );
    }
    return mutableCurrentTreeData;
  });
};

export const alphabetiseTreeData = (treeData) => {
  const mutableTreeData = [...treeData];
  mutableTreeData.sort((child1, child2) =>
    child1.node.localeCompare(child2.node)
  );

  return mutableTreeData.map((currentTreeData) => {
    const currentMutableTreeData = { ...currentTreeData };
    currentMutableTreeData.children = alphabetiseTreeData(
      currentMutableTreeData.children
    );
    return currentMutableTreeData;
  });
};

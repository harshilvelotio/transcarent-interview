import debounce from "lodash.debounce";
import { useCallback, useEffect, useState } from "react";
import { getBin, updateBin } from "../api/treeApi";
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
  const [loading, setLoading] = useState(false);

  const fetchTreeData = useCallback(async () => {
    try {
      setLoading(true);
      const currentTreeData = await getBin();
      setTreeData(currentTreeData.record);
    } catch (e) {
    } finally {
      setLoading(false);
    }
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateTreeData = useCallback(
    debounce(
      async (updatedTreeData) => {
        try {
          setLoading(true);
          await updateBin(updatedTreeData);
        } catch {
        } finally {
          setLoading(false);
        }
      },
      1000,
      {}
    ),
    []
  );

  useEffect(() => {
    fetchTreeData();
  }, [fetchTreeData]);

  useEffect(() => {
    updateTreeData(treeData);
  }, [treeData, updateTreeData]);

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
    loading,
  };
};

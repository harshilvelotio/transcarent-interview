import "./index.css";
import { TreeContext } from "./TreeContext";
import { useTree } from "./treeHooks";
import TreeNode from "./TreeNode";
const initialTreeData = require("./data.json");

export default function Tree() {
  const { treeData, addNode, deleteNode } = useTree(initialTreeData);

  const renderTree = () =>
    treeData.map((currentTreeData) => (
      <TreeNode
        key={`tree-list-${currentTreeData.levelId}`}
        {...currentTreeData}
        level={0}
      />
    ));

  return (
    <TreeContext.Provider value={{ treeData, addNode, deleteNode }}>
      <div className="tree">
        <ul className="root-list">{renderTree()}</ul>
      </div>
    </TreeContext.Provider>
  );
}

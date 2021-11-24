import { Spinner } from "reactstrap";
import ToggleSwitch from "../ToggleSwitch";
import "./index.css";
import { TreeContext } from "./TreeContext";
import { useTree } from "./treeHooks";
import TreeNode from "./TreeNode";
const initialTreeData = require("./data.json");

export default function Tree() {
  const {
    treeData,
    addNode,
    deleteNode,
    shouldAlphabetiseTree,
    alphabetiseTree,
    loading,
  } = useTree(initialTreeData);

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
        <ToggleSwitch
          checked={shouldAlphabetiseTree}
          onChange={alphabetiseTree}
        />
        {loading ? <Spinner color="primary" /> : null}
        <ul className="root-list">{renderTree()}</ul>
      </div>
    </TreeContext.Provider>
  );
}

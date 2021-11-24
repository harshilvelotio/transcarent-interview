import "./index.css";
import TreeNode from "./TreeNode";
const treeData = require("./data.json");

export default function Tree() {
  const renderTree = () =>
    treeData.map((currentTreeData) => (
      <TreeNode {...currentTreeData} level={0} />
    ));

  return (
    <>
      <div className="tree">
        <ul className="root-list">{renderTree()}</ul>
      </div>
    </>
  );
}

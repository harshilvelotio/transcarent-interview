import { useContext, useState } from "react";
import { addPeriods } from "../utils/stringUtils";
import { TreeContext } from "./TreeContext";

const TreeNode = ({ node, children, level, levelId }) => {
  const nodeName = addPeriods(node, level);
  const [newNodeVal, setNewNodeVal] = useState("");
  const { addNode, deleteNode } = useContext(TreeContext);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addNode(newNodeVal, levelId);
      setNewNodeVal("");
    }
  };

  const handleDeleteNode = () => deleteNode(levelId);

  return (
    <li key={`tree-list-li-${levelId}`}>
      <span>{levelId}</span>
      <span>{nodeName}</span>
      <span onClick={handleDeleteNode}>❌</span>
      <ul>
        {children &&
          children.map((node) => (
            <TreeNode
              key={`tree-list-nested-${node.levelId}`}
              {...node}
              level={level + 1}
            />
          ))}
        <li>
          <input
            value={newNodeVal}
            onChange={(e) => setNewNodeVal(e.currentTarget.value)}
            onKeyDown={handleKeyDown}
          />
        </li>
      </ul>
    </li>
  );
};

export default TreeNode;

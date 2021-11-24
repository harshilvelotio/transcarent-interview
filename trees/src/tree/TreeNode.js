import { addPeriods } from "../utils/stringUtils";

const TreeNode = ({ node, children, level }) => {
  const nodeName = addPeriods(node, level);

  return (
    <li>
      <span>{nodeName}</span>
      <ul>
        {children &&
          children.map((node) => <TreeNode {...node} level={level + 1} />)}
      </ul>
    </li>
  );
};

export default TreeNode;

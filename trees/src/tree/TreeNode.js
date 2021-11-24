const TreeNode = ({ node, children }) => {
  return (
    <li>
      <span>{node}</span>
      <ul>{children && children.map((node) => <TreeNode {...node} />)}</ul>
    </li>
  );
};

export default TreeNode;

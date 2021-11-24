import "./index.css";

const GridLines = ({ depth }) =>
  [...Array(depth)].map((_empty, index) => (
    <span className={`indentation-level-${index + 1}`} />
  ));

export default function Tree() {
  return (
    <>
      <GridLines depth={4} />
      <div className="tree">
        <p>root</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;ant</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;bear</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cat</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dog</p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;elephant
        </p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;frog</p>
        <ul className="root-list">
          <li>
            <span>root</span>
            <ul>
              <li>ant</li>
              <li>
                <span>bear</span>
                <ul>
                  <li>cat</li>
                  <li>
                    <span>dog</span>
                    <ul>
                      <li>elephant</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>frog</li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}

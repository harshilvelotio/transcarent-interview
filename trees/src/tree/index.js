import "./index.css";

export default function Tree() {
  return (
    <>
      <div className="tree">
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

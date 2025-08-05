import { useState } from "react";
import "./Collapse.css";
import "./Collapse.css"; // make sure to create this CSS file or paste into your global one

function CollapseItem({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse-container">
      <div className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <span className={`arrow ${isOpen ? "rotate" : ""}`}>▼</span>
      </div>
      {isOpen && <div className="collapse-content">{children}</div>}
    </div>
  );
}

export default CollapseItem;

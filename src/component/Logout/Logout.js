import React from "react";
import "./logout.css";
function Logout(props) {
  const { open, onClose, onConfirm } = props;
  return (
    open && (
      <div className="logout">
        <div className="content">
          <i className="iconfont" style={{ fontSize: "1.5rem" }}>
            &#xe65c;
          </i>
          <p>Are you sure you want to Exit?</p>
        </div>
        <footer>
          <button onClick={onClose}>Cancel</button>
          <button onClick={onConfirm}>OK</button>
        </footer>
      </div>
    )
  );
}

export default Logout;

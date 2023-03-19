import React from "react";
import Colors from "../utils/Colors";

const styles = {
  
popup: {
  position: "fixed",
  top: "0",
  left: "0",
  width: "100%",
  height: "100vh",

  display: "flex",
  justifycontent: "center",
  alignitems: "center",
},
popupinner: {
  position: "relative",
  padding: "32px",
  width: "100%",
  maxwidth: "640px",
  backgroundColor: Colors.OFF_WHITE,
},
closebtn: {
  position: "absolute",
  top: "16px",
  right: "16px",
},
};

function Popup(props) {
  return (props.trigger) ? (
    <div className="popup">
      <div className="popup-inner">
      <button className="close-btn" onClick={() => props.setTrigger(false)}>Close</button>
      { props.children}
      </div>
    </div>
  ) : "";
}

export default Popup

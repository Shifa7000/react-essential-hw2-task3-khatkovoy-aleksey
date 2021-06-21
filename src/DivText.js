import React from "react";
import "./DivText.css";

class DivText extends React.Component {
  render() {
    return (
      <section className="DivText">
        <div>{this.props.div1Text}</div>
        <div>{this.props.div2Text}</div>
        <div>{this.props.div3Text}</div>
      </section>
    );
  }
}

export default DivText;

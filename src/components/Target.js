import React, {Component} from "react";
import {DropTarget} from "react-dnd";

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    hovered: monitor.isOver(),
    item: monitor.getItem(),
  };
}

class Target extends Component {
  render() {
    const {connectDropTarget, image} = this.props;
    return connectDropTarget(
      <div className="target">
        <img src={image} alt="glass" style={{ width: "110%" }}></img>
      </div>
    );
  }
}

export default DropTarget("item", {}, collect)(Target);
import React, { Component } from "react";
import { Rate } from "antd";
import EditModal from "./editmodal";

 class Card extends Component {
  render() {
    return (
      <div className="cards">
        <div>{this.props.name}</div>
        <img className="img" src={this.props.img} />
        <div>
          <Rate allowHalf defaultValue={this.props.rate} />
        </div>
        <EditModal name={this.props.name} img={this.props.img} rate={this.props.rate} index={this.props.index} />
      </div>
    );
  }
}
export default Card
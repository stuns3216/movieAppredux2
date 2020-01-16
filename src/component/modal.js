import React from "react";
import { Modal, Button, Input } from "antd";

class MyModal extends React.Component {
  state = { visible: false, name: "", image: "", rate: 0 };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.props.handleData({
      name: this.state.name,
      image: this.state.image,
      rate: this.state.rate
    });
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };
  handlechangename = e => {
    this.setState({ name: e.target.value });
  };
  handlechangeimage = e => {
    this.setState({ image: e.target.value });
  };
  handlechangerate = e => {
    this.setState({ rate: e.target.value });
  };
  render() {
    return (
      <div className="modalbutton">
        <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Input placeholder="name" onChange={this.handlechangename} />
          <Input placeholder="img" onChange={this.handlechangeimage} />
          <Input placeholder="rate" onChange={this.handlechangerate} />
        </Modal>
      </div>
    );
  }
}

export default MyModal;

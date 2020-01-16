import React,{Component} from 'react';
import { Modal, Button ,Input} from 'antd';
import{connect} from "react-redux";
import {editfilms} from './action/action'


class EditModal extends Component {
  state = { visible: false,name:this.props.name,img:this.props.img,rate:this.props.rate,index:this.props.index };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.props.editfilms({name:this.state.name,img:this.state.img,rate:this.state.rate,index:this.state.index})
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          edit Modal
        </Button>
        <Modal
          title="edit Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
        <Input  value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})}/>
        <Input value={this.state.img} onChange={(e)=>this.setState({img:e.target.value})}/>
        <Input value={this.state.rate} onChange={(e)=>this.setState({rate:e.target.value})}/>
        </Modal>
      </div>
    );
  }
}
const mapStateToProps=state=>{
  return{newfilms:state}
}

export default connect(mapStateToProps,{editfilms}) (EditModal)
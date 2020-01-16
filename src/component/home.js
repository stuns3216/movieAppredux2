import React,{Component} from "react";
import { Input, Rate,  } from "antd";
import{connect} from "react-redux";
import Card from "./card";
import MyModal from './modal'

import './home.css'



class Home extends Component {
    state={films:'',
    rate:0,
    search:'',
    currentObject:{}
  }

    handleData=(valeur)=>{
    //const newArray=this.props.films
    //newArray.push(valeur)
   //this.setState({films:newArray})

   this.props.handleData(valeur)
  }
 
  handleEdit=(valeur)=>{
   this.props.handleEdit(valeur)
  }

  // fonction pour recuperer Rate
  handleRate=(v)=>{
      this.setState({rate:v})
  }
  // handle the input value with e.target.value
  handleInput =(e)=>{
    this.setState({search:e.target.value})
}
    render() {
      console.log('this.props.newFilms', this.props.newFilms)
        return (
            <div>
                <div className="home">
      <div className="homeheader">
        <Input className="searsh" onChange={this.handleInput}/>
        <Rate onChange={this.handleRate} />
      </div>
      <div className="homebody">
        {this.props.newFilms.map((el, i) => {
         console.log('el', el)
         return <Card name={el.name} img={el.img} rate={el.rate} index={i}/>;
        })}
        <MyModal    handleData={this.handleData}/> 
        
      </div>
    </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
  return {newFilms:state}
}
const mapDispatchToprops=(dispatch)=>{
  return {
    handleData:(data)=>dispatch({type:"ADD",payload:data}),
    handleEdit:(data)=>dispatch({type:"EDIT",payload:data})
  }
}

export default connect (mapStateToProps,mapDispatchToprops) (Home)

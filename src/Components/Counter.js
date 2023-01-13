import React, { Component } from 'react'

export default class Counter extends Component {
    state={
        count:0,
    }
  incrementCount=()=>{
    this.setState((pre)=>({count:pre.count+1}))
  }
  render() {
      const{render}=this.props;
      const{count}=this.state;
    return  render(count,this.incrementCount);
   
    
  }
}

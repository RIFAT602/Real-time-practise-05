import React, { Component } from 'react'

export default class Click extends Component {
  
 
  render() {
    const{count,incrementCount}=this.props
    return (
      <div>
          <h1   type='text' onClick={incrementCount}>rifat {count} time clicks

          </h1>
      </div>
    )
  }
}

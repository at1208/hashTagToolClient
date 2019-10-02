import React, { Component } from 'react';
import './page.css'


class Tools extends Component {
  state ={
    data: ''
  }
  render(){
    return <div className='container'>
      <h1 className=' text-center b1 shadow'>Tool</h1>

    <input type="text" value={this.state.data} placeholder='Enter Product' onChange={(e) => console.log(e.target.value)}/>

    </div>
  }
}
export default Tools;

import React, { Component } from 'react';
import './tools.css'

class Tools extends Component {

  render(){
    return <div className='container'>
    <h1 className='text-center'>Tool</h1>

<div className='container text-center'>
      <div className='b4 text-center container'>
          <div className='container b2 float-left '>
         <input className='b3 text-center' placeholder='Search for niche'/>
         </div>
      </div>

<br />
      <div className='b6 container'>
      <button className='b5 btn-lg'>SEARCH</button>
      </div>
</div>
    </div>
  }
}
export default Tools;

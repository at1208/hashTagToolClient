import React, { Component } from 'react';
import './home.css'
import { Link } from 'react-router-dom'

import { MdContacts,MdAllInclusive,MdDashboard,MdViewCarousel,MdWbIridescent } from "react-icons/md";



class Home extends Component {

  render(){
    return <div>

 <div className='a1'>
   <input  className='a3 float-left'/>
 <div className='container-fluid'>
<button className='btn a2 float-right'>Contact</button>
<button className='btn a2 float-right'>Services</button>
<button className='btn a2 float-right'>Tools</button>
<button className='btn a2 float-right'>Newsletter</button>
<button className='btn a2 float-right'>Blog</button>
 </div>

 </div>
    <div className='container text-center'>
   <h1 className='  a4'> Hashtag Research Tool </h1>
   <p className='text-center a5'>Up your Instagram game by knowing the exact hashtags top influencers are using</p>
   </div>
          </div>
  }
}
export default Home;

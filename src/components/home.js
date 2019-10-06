import React, { Component } from 'react';
import './home.css'
import { Link } from 'react-router-dom'

import { MdContacts,MdAllInclusive,MdDashboard,MdViewCarousel,MdWbIridescent } from "react-icons/md";



class Home extends Component {

  render(){
    return <div>

           <div className='jumbotron'>
           <h1 className='text-center a2'>HashTag Research Tool</h1>
           </div>

           <div className='col-lg-12 justify-content-center container-fluid text-center'>

              <Link to='/tools'><button className='col-lg-2 a1 btn'><MdWbIridescent className='a3'/>Tool</button></Link>
              <Link to='/newsletter'><button className='col-lg-2 a1 btn'><MdAllInclusive className='a3'/>Newsletter</button></Link>
              <Link to='/blog'><button className='col-lg-2 a1 btn'><MdDashboard className='a3'/>Blog</button></Link>
              <Link to='/services'><button className='col-lg-2 a1 btn'><MdViewCarousel className='a3'/>Services</button></Link>
              <Link to='/contact'><button className='col-lg-2 a1 btn'> <MdContacts className='a3'/>Contact</button></Link>

           </div>
          </div>
  }
}
export default Home;

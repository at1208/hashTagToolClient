import React, { Component } from 'react';
import './home.css'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';



import { MdContacts,MdAllInclusive,MdDashboard,MdViewCarousel,MdWbIridescent } from "react-icons/md";



class Home extends Component {

  render(){
    return <div>

 <div className='a1'>
        <Fade bottom>
 <div className='container-fluid text-center'>

    <Link to='/blog'><button className='btn a2'>Blog</button></Link>
  <Link to='/tools'><button className='btn a2 '>Tools</button></Link>
  <Link to='/newsletter'><button className='btn a2 '>Newsletter</button></Link>
  <Link to='/services'><button className='btn a2'>Services</button></Link>
    <Link to='/contact'><button className='btn a2'>Contact</button></Link>


 </div>
  </Fade>
 </div>
    <div className='container text-center'>
            <Bounce left>
   <h1 className='  a4'> Hashtag Research Tool </h1>
           </Bounce>

                     <Bounce left>
   <p className='text-center a5'>Up your Instagram game by knowing the exact hashtags top influencers are using</p>
              </Bounce>
   </div>
          </div>
  }
}
export default Home;

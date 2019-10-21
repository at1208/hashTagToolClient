import React, { Component } from 'react';
import './home.css'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';




import { MdContacts,MdAllInclusive,MdDashboard,MdViewCarousel,MdWbIridescent } from "react-icons/md";



class Home extends Component {

  render(){
    return <div>

 <div className='a1'>
        <Fade bottom>
 <div className='container-fluid '>

   <span className='v1'>Influ<span className='v2'>Rocket</span></span>
     <Link to='/contact'><button className='btn a2 float-right'>Contact</button></Link>
    <Link to='/blog'><button className='btn a2 float-right'>Blog</button></Link>

  <Link to='/newsletter'><button className='btn a2 float-right'>Newsletter</button></Link>

  <Link to='/tools'><button className='btn a2 float-right'>Tools</button></Link>
  <Link to='/services'><button className='btn a2 float-right'>Services</button></Link>
    <Link to='/'><button className='btn a2 float-right'>Home</button></Link>


 </div>
  </Fade>
 </div>
    <div className='container-fluid text-center jumbotron justify-content-center row '>
            <Bounce left>
   <h1 className='  a4'>Instagram Follow-back Tool</h1>
           </Bounce>

                     <Bounce left>
   <h6 className='text-center a5'>Get Up To 50 Accounts With 80% follow-back potential</h6>


   <div className='container row justify-content-center s8'>
    <Zoom top>
   <div className='s2'>
   <h1 className='s1 s4'>Your IG Account Name</h1>
   <input className='s3'/>
   </div>
    </Zoom>

 <Zoom top>
   <div  className='s2'>
   <h1 className='s1'>Select A Niche(choose from options)</h1>
    <input  className='s3'/>
   </div>
    </Zoom>

     <Zoom top>
   <div className='s2' >
   <button className='s6 s7'>Download</button>
   </div>
 </Zoom>
   </div>
              </Bounce>
   </div>
          </div>
  }
}
export default Home;

import React, { Component } from 'react';
import './home.css'
import Sidebar from "react-sidebar";
import { Link } from 'react-router-dom'
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import { MdContacts,MdAllInclusive,MdDashboard,MdViewCarousel,MdWbIridescent,MdBlurOn } from "react-icons/md";



class Home extends Component {
  state = {
      sidebarOpen: true
    };

    onSetSidebarOpen = (open) => {
    this.setState({ sidebarOpen: open });
  }
  render(){
    return <>
              <div className='jumbotron text-center shadow a1'>
               <Slide bottom><h1 className='a3'> <b style={{ color: '#bbdefb'}}>HashTag</b> <b style={{ color: 'white'}}>Research</b><b style={{ color: '#bbdefb'}}> Tool</b> </h1>
               </Slide>
    </div>

              <Sidebar
        sidebar={
          <div>
       <h3 className='a4 shadow'>  <Fade left> <span>< MdBlurOn style={{ color:'#ff3d00'}}/>Content</span>  </Fade></h3>

  <Fade left>
         <Link to='/tools'>
          <div className='text-center a6 shadow'>

          <button className=' btn btn-block a5'> <MdAllInclusive style={{ marginRight:'5px', color:'white'}} />  Tool</button>
          </div>
         </Link>
 </Fade>

  <Fade left>
        <Link to='/blog'>
          <div className='text-center a6 shadow'>
          <button className=' btn btn-block a5'><MdWbIridescent style={{ marginRight:'5px',color:'white'}}/>Blog</button>
          </div>
          </Link>
  </Fade>

  <Fade left>
          <Link to='/services'>
          <div className='text-center a6 shadow'>
          <button className=' btn btn-block a5'>< MdDashboard style={{ marginRight:'5px',color:'white'}} />Services</button>
          </div>
          </Link>
  </Fade>

  <Fade left>
          <Link to='/newsletter'>
          <div className='text-center a6 shadow'>
          <button className=' btn btn-block a5'> <MdViewCarousel style={{ marginRight:'1px',color:'white'}} />Newsletter</button>
          </div>
          </Link>
  </Fade>

  <Fade left>
          <Link to='/contact'>
          <div className='text-center a6 shadow'>
          <button className=' btn btn-block a5'>< MdContacts style={{ marginRight:'5px',color:'white'}}/> Contact</button>
          </div>
          </Link>
  </Fade>

          </div>
        }
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{
          sidebar: { background: "white",zIndex: 10, }


         }}>


<i className="fa fa-bars a2 float-left" onClick={() => this.onSetSidebarOpen(true)}></i>
      </Sidebar>

          </>
  }
}
export default Home;

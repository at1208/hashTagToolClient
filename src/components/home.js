import React, { Component } from 'react';
import './home.css'
import Sidebar from "react-sidebar";
import { Link } from 'react-router-dom'
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';


class Home extends Component {
  state = {
      sidebarOpen: true
    };

    onSetSidebarOpen = (open) => {
    this.setState({ sidebarOpen: open });
  }
  render(){
    return <>
              <div className='jumbotron text-center a1'>
               <Slide bottom><h1 className='a3'> <b style={{ color: '#c62828'}}>HashTag</b> <b style={{ color: '#f4511e'}}>Research</b><b style={{ color: '#ec407a'}}> Tool</b> </h1>
               </Slide>
    </div>

              <Sidebar
        sidebar={
          <div>
       <h3 className='a4'>  <Fade left>  Content  </Fade></h3>

  <Fade left>
         <Link to='/tools'>
          <div className='text-center a6 shadow'>
          <button className=' btn btn-block a5'>Tool</button>
          </div>
         </Link>
 </Fade>

  <Fade left>
        <Link to='/blog'>
          <div className='text-center a6 shadow'>
          <button className=' btn btn-block a5'>Blog</button>
          </div>
          </Link>
  </Fade>

  <Fade left>
          <Link to='/services'>
          <div className='text-center a6 shadow'>
          <button className=' btn btn-block a5'>Services</button>
          </div>
          </Link>
  </Fade>

  <Fade left>
          <Link to='/newsletter'>
          <div className='text-center a6 shadow'>
          <button className=' btn btn-block a5'>Newsletter</button>
          </div>
          </Link>
  </Fade>

  <Fade left>
          <Link to='/contact'>
          <div className='text-center a6 shadow'>
          <button className=' btn btn-block a5'>Contact</button>
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

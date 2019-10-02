import React, { Component } from 'react';
import './home.css'
import Sidebar from "react-sidebar";


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
              <h1 className='a3'> HashTag Research Tool </h1>
              </div>

              <Sidebar
        sidebar={
          <div>
          <h3 className='a4'> Sidebar content </h3>

          <div className='text-center a6 shadow'>
          <button className=' btn btn-block a5'>Tool</button>
          </div>
          <div className='text-center a6 shadow'>
          <button className=' btn btn-block a5'>Blog</button>
          </div>
          <div className='text-center a6 shadow'>
          <button className=' btn btn-block a5'>Services</button>
          </div>
          <div className='text-center a6 shadow'>
          <button className=' btn btn-block a5'>Newsletter</button>
          </div>
          <div className='text-center a6 shadow'>
          <button className=' btn btn-block a5'>Contact</button>
          </div>

          </div>
        }
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{
          sidebar: { background: "#e1bee7",zIndex: 10, }


         }}>


<i className="fa fa-bars a2 float-left" onClick={() => this.onSetSidebarOpen(true)}></i>
      </Sidebar>

          </>
  }
}
export default Home;

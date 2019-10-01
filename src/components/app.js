import React from "react";
import Sidebar from "react-sidebar";
import './app.css'
import { Link } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  render() {
    return (
      <>
      <div className='text-center a1'>
        <h1 className='a8'>HashTag Tool</h1>
      </div>


      <Sidebar
        sidebar={
          <div className='a7'>
         <h4 className='a4 container-fluid text-center'> Content </h4>

          <Link to='/blog'><button className='btn btn-md text-center a5 shadow '>Blog</button></Link>
          <br />
            <Link to='/newsletter'><button className='btn btn-md text-center a5 shadow'>Newsletter</button></Link>
          <br />
            <Link to='/tools'><button className='btn btn-md  text-center a5 shadow'>Tools</button></Link>
          <br />
            <Link to='/services'><button className='btn btn-md text-center a5 shadow'>Services</button></Link>
          <br />
            <Link to='/contact'><button className='btn btn-md  text-center a5 shadow'>Contact</button></Link>
          </div>
        }
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        transitions = {true}
        shadow={true}
     
        styles={{ sidebar: { backgroundColor: 'white' } }}
      >
        <button onClick={() => this.onSetSidebarOpen(true)} className='btn btn-lg float-left'>
        <i className="fa fa-bars a2"></i>
        </button>
      </Sidebar>



      </>
    );
  }
}

export default App;

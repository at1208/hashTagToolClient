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
      <div className=''>
      <div className='text-center a1 container-fluid'>
        <h1 className='a8'>HashTag Tool</h1>
      </div>
 

      <Sidebar
        sidebar={
          <div className='a7'>
         <h4 className='a4 container-fluid text-center'> Content </h4>

          <div className='text-center'><Link to='/blog'><button className='btn btn-lg text-center a5 shadow '>Blog</button></Link></div>
          <br />
            <div className='text-center'><Link to='/newsletter'><button className='btn btn-lg text-center a5 shadow'>Newsletter</button></Link></div>
          <br />
            <div className='text-center'><Link to='/tools'><button className='btn btn-lg  text-center a5 shadow'>Tools</button></Link></div>
          <br />
            <div className='text-center'><Link to='/services'><button className='btn btn-lg text-center a5 shadow'>Services</button></Link></div>
          <br />
            <div className='text-center'><Link to='/contact'><button className='btn btn-lg  text-center a5 shadow'>Contact</button></Link></div>
          </div>
        }
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        transitions = {true}
        shadow={true}

        styles={{ sidebar: { backgroundColor: 'white' ,zIndex: 4,}, width:'auto'  }}
      >
        <button onClick={() => this.onSetSidebarOpen(true)} className='btn btn-lg float-left'>
        <i className="fa fa-bars a2"></i>
        </button>
      </Sidebar>



      </div>
    );
  }
}

export default App;

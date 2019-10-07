import React, { Component } from 'react';
import './tools.css'
import axios from 'axios'
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

class Tools extends Component {

 state = {
   data: [],
   niche:''
 }



  onSubmitNiche = () => {
    const niche = this.state.niche
    axios.get(`https://cors-anywhere.herokuapp.com/https://hashhy.herokuapp.com/${niche}`)
    .then((data) => this.setState({ data: data.data}))
    .catch(err => console.log(err))
  }

  render(){
    console.log(this.state.data)
    return <div className='container'>
            <Slide top>
    <h1 className='text-center'>Tool</h1>
            </Slide>

<div className='container text-center b13'>
 <Zoom top>
      <div className='b4 text-center container'>
          <div className='container b2 float-left '>
         <input className='b3 text-center' placeholder='Search for niche' onChange = {(e) => this.setState({ niche: e.target.value})} value = {this.state.niche}/>
         </div>
      </div>
          </Zoom>

<br />
 <Zoom top>
      <div className='b6 container'>
      <button className='b5 btn-lg' onClick = {this.onSubmitNiche}>SEARCH</button>
      </div>
        </Zoom>

</div>



 <div className='container b7 text-center'>
        <Fade bottom>
 <div className='b12 container'>
   <b className='b11' > <span className='b88'>Niche ID</span>  {this.state.data.Niche_ID}</b>
 </div>
         </Fade>

        <Fade bottom>
    <div className='container b8'>
    <b className='b11'><span className='b88'>Hashtag 1</span> {this.state.data.Hashtag1}</b>
    <br />
    <b className='b11'><span className='b88'>Difficulty Score 1</span> {this.state.data.Difficulty1}</b>
    </div>
       </Fade>
        <Fade bottom>
    <div className='container b9'>
      <b className='b11'><span className='b99'>Hashtag 2</span> {this.state.data.Hashtag2}</b>
      <br />
      <b className='b11'> <span className='b99'>Difficulty Score 2</span> {this.state.data.Difficulty2}</b>
    </div>
       </Fade>
        <Fade bottom>
    <div className='container b10'>
      <b className='b11'><span className='b1010'>Hashtag 3</span> {this.state.data.Hashtag3}</b>
      <br />
      <b className='b11'> <span className='b1010'>Difficulty Score 3 </span>{this.state.data.Difficulty3}</b>
    </div>
           </Fade>
 </div>


    </div>
  }
}
export default Tools;

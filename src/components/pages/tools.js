import React, { Component } from 'react';

class Tools extends Component {
    state ={

    }

    componentDidMount(){
      const proxyurl = 'https://cors-anywhere.herokuapp.com/'
      const nichelist = 'https://hashtool.herokuapp.com'
      fetch(proxyurl + nichelist)
      .then((res) => {
        if(res.ok){
          console.log(res.json())
        } else {
      throw Error(res.statusText);  }
      })
      .then((result) => {
        console.log(result)
      })
      .catch((err) => console.log(err))
    }
  render(){
    return <div className='container'>
    <h1 className='text-center'>Tool</h1>
    </div>
  }
}
export default Tools;

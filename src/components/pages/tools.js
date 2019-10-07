import React, { Component } from 'react';
import './tools.css'
import axios from 'axios';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Autosuggest from 'react-autosuggest';

const Niche = [
  {
    name: 'Jeans',

  },
  {
    name: 'Leather_Jacket',

  },
  {
    name: 'Leather_Pants',

  },
  {
    name: 'Leather_Clothing',

  },
  {
    name: 'Mens_and_Boys_Hats',

  },
  {
    name: 'Mens_Suits',

  },
  {
    name: 'Neckwear',

  },
  {
    name: 'Pants',

  },
  {
    name: 'Shirts',

  },
  {
    name: 'Surplus_and_Salvage_Merchandise',

  },


];

const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : Niche.filter(niche =>
    niche.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};

const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = suggestion => (
  <div className='c1 shadow'>
   {suggestion.name}
  </div>
);

class Tools extends Component {

 state = {
   data: [],


   value: '',
   suggestions: []
 }

 onChange = (event, { newValue }) => {
   this.setState({
     value: newValue
   });
 };

 onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };



  onSubmitNiche = () => {

    const niche = this.state.value
    axios.get(`https://cors-anywhere.herokuapp.com/https://hashhy.herokuapp.com/${niche}`)
    .then((data) => this.setState({ data: data.data}))
    .catch(err => console.log(err))
  }

  render(){
console.log(this.state.value)
    const { value, suggestions } = this.state;

    const inputProps = {
        placeholder: 'Search for niche',
        value,
        onChange: this.onChange
      };

    console.log(this.state.data)
    return <div className='container'>
            <Slide top>
    <h1 className='text-center'>Tool</h1>
            </Slide>

<div className='container-fluid row-sm-6 c2'>

        <div className='container text-center b13 row'>
<Zoom top>

            <div className='b4 text-center container'>

                <div className='container b2 float-left'>


                        <Autosuggest
                     suggestions={suggestions}
                     onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                     onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                     getSuggestionValue={getSuggestionValue}
                     renderSuggestion={renderSuggestion}
                     inputProps={inputProps}
                   />

               </div>

           </div>

</Zoom>

<Zoom top>
            <div className='b6 container'>
            <button className='b5 btn-lg' onClick = {this.onSubmitNiche}>Find Hashtag</button>
            </div>

</Zoom>
</div>

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

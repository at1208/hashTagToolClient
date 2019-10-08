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

<div className='container c2'>
 <Zoom top>
        <div className='container b13 row justify-content-center'>

             <div className='d2'>
                   <div className='d1'>
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


        <div className='b7'>
            <div className='b6'>
            <button className='b5' onClick = {this.onSubmitNiche}>Find Hashtag</button>
             </div>
            </div>


</div>
</Zoom>
</div>


 <div className='container b77 text-center row justify-content-center'>

            <Slide top>
 <div className='g1'>

 <div className='g11'>
 <b>Low Difficulty Hashtag</b>
 <p>(For less than 500 followers)</p>
 </div>
{this.state.data.Hashtag1}
<br />
{this.state.data.Difficulty1}

 </div>
            </Slide>

            <Slide top>
 <div className='g2'>

 <div className='g11'>
  <b>Medium Difficulty Hashtag</b>
  <p>(For less than 10,000 followers)</p>
 </div>
{this.state.data.Hashtag2}
<br />
 {this.state.data.Difficulty2}
 </div>
            </Slide>
             <Slide top>
 <div className='g3'>

 <div  className='g11'>
  <b>High Difficulty Hashtag</b>
</div>

{this.state.data.Hashtag3}
<br />
{this.state.data.Difficulty3}
 </div>
        </Slide>
 </div>


    </div>
  }
}
export default Tools;

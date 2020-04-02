import React, { Component } from 'react'
import axios from 'axios';
import './App.css';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      data: []
    }
  }

  componentDidMount() {

    let one =
  "https://anapioficeandfire.com/api/characters/16";

 
let two =
  "https://www.anapioficeandfire.com/api/houses/378";
let three =
  "https://www.anapioficeandfire.com/api/houses/229";
  let four="https://www.anapioficeandfire.com/api/houses/17";
  let five="https://www.anapioficeandfire.com/api/characters/901";
  let six="https://www.anapioficeandfire.com/api/houses/362";
  let seven="https://www.anapioficeandfire.com/api/characters/232";
 

const requestOne = axios.get(one);
const requestTwo = axios.get(two);
const requestThree = axios.get(three);
const requestfour = axios.get(four);
const requestfive = axios.get(five);
const requestsix = axios.get(six);
const requestseven = axios.get(seven);
axios
  .all([ requestOne,requestTwo, requestThree,requestfour,requestfive,requestsix,requestseven])
  .then(
    axios.spread((...responses) => {
      // const responseOne = responses[0];
      const responseTwo = responses[0];
      const responesThree = responses[1];
      const responsefour = responses[2];
const responsefive = responses[3];
const responsesix = responses[4];
const responseseven = responses[5];

      // use/access the results
      console.log( responseTwo, responesThree,responsefour,responsefive,responsesix,responseseven);
    })
  )
  .catch(errors => {
    // react on errors.
    console.error(errors);
  });

  }
  render() {
    return (
      <div>
        <h1> Spoonacular API </h1>
        <ul>
          {this.state.data.map((recipe, id) => <li key={id}> {recipe.title} </li>)}
        </ul>
      </div>
    )
  }
}


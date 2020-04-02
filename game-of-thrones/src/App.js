import React, { Component } from 'react'
import axios from 'axios';
import './App.css';



export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      exborn:null,
      bornS: null,
      regionS:null,
      coatS:null,
      seatS:null,
      aliaS:null
    }
  }
   bornex(){
    axios.get('https://anapioficeandfire.com/api/characters/583')
    .then( res => this.setState({ exborn: res.data.born })).catch(e => console.error(e))

  }
  born()
  {
    axios.get('https://anapioficeandfire.com/api/characters/16')
    .then( res => this.setState({ bornS: res.data.born })).catch(e => console.error(e))

  }
  async region(){
    
    const res=await axios.get('https://www.anapioficeandfire.com/api/houses/378')
    this.setState({ regionS: res.data.region });

  }
   async coat()
  {
    
     const res=await axios.get('https://www.anapioficeandfire.com/api/houses/229')
     this.setState({ coatS: res.data.coatOfArms
     });
    
  }
  async seat()
  {
    const res= await axios.get('https://www.anapioficeandfire.com/api/houses/17')
    this.setState({ seatS: res.data.seats[1] });

  }
  async alias()
  {
    const res=await axios.get('/https://www.anapioficeandfire.com/api/characters/901')
   this.setState({ aliaS: res.data.aliases[1] });

  }
  
  componentDidMount(){

    this.born();
    this.region();
   this.coat();
    this.seat();
   this.alias();
  }
  
  render() {
    return (
      <div>
        Born: <h1> {this.state.bornS} </h1>
        Region :<h1> {this.state.regionS} </h1>
         coatOfArms:<h1> {this.state.coatS} </h1> 
         {/* coatOfArms:<h1> {this.state.coatS} </h1> */}
        Seat:<h1> {this.state.seatS} </h1> 
        Alias:<h1> {this.state.aliaS} </h1>
      </div>
    )
  }
}

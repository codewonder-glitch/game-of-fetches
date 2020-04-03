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
      aliaS:null,
      founderS:null,
      name1:null,
      name2:null,
      name3:null
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
    const res=await axios.get('https://www.anapioficeandfire.com/api/characters/901')
   this.setState({ aliaS: res.data.aliases[1] });

  }
  async founder(){

    const res=await axios.get('https://www.anapioficeandfire.com/api/houses/362');
    const res1=await axios.get(res.data.founder);
    this.setState({ founderS: res1.data.name });

  }
  async promiseal(){
    const res=await axios.get('https://www.anapioficeandfire.com/api/characters/232');
    const res1=res.data.povBooks;
    console.log(res.data.povBooks);
    Promise.all([axios.get(res1[0]),
    axios.get(res1[1]),
      axios.get(res1[2])]).then(([result1,result2,result3])=>{
this.setState({name1:result1.data.name,
  name2:result2.data.name,
  name3:result3.data.name}

    );
});
  }
  
  componentDidMount(){

    this.born();
    this.region();
   this.coat();
    this.seat();
   this.alias();
   this.founder();
   this.promiseal();
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
        Founder:<h1> {this.state.founderS} </h1>
        Title1:<h1> {this.state.name1} </h1>
        Title2:<h1> {this.state.name2} </h1>
        Title3:<h1> {this.state.name3} </h1>
      </div>
    )
  }
}

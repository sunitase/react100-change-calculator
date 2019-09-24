import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {amountDue: 0,
      amountReceived: 0, 
      changeDue: 0, 
      twenties: '',
      tens: '',
      fives: '',
      ones: '',
      quarters: '',
      dimes: '',
      nickels: '',
      pennies: '',
      dollars: '',
      output: ''}
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.calculatedue = this.calculatedue.bind(this);  
  }

  handleChange(event) {
    console.log(event.target.name, event.target.value)
    this.setState({[event.target.name]: event.target.value})
  
  }
  
  handleClick(e){
  e.preventDefault() 
  let calculatedue = this.calculatedue();
  }

  calculatedue(){
    const amountDue = this.state.amountDue;
    const amountReceived = this.state.amountReceived;
    let twenties = this.state.twenties;
    let tens = this.state.tens;
    let fives = this.state.fives;
    let ones = this.state.ones;
    let quarters = this.state.quarters;
    let dimes = this.state.dimes;
    let nickels = this.state.nickels;
    let pennies = this.state.pennies;
    let dollars = this.state.dollars;
    var changeDue, change;

    changeDue = amountReceived - amountDue;
    dollars = Math.floor(changeDue)
    var decimalPart = changeDue - Math.floor(changeDue); 
    var changenow = decimalPart.toFixed(2);
    change = changenow*100;
    console.log(change)
    
    var twentiesbill = Math.floor(dollars/20);
    this.setState({twenties: twentiesbill})
    
    var tensbill = Math.floor(((dollars) - (twentiesbill * 20)) / 10);
    this.setState({tens: tensbill})
    console.log(tensbill)
    
    
    var fivesbill = Math.floor(((dollars) - (twentiesbill * 20) - (tensbill * 10)) / 5);
    this.setState({fives: fivesbill}) 

    var onesbill = Math.floor((((dollars) - (twentiesbill * 20) - (tensbill* 10) - (fivesbill * 5))) / 1);
    this.setState({ones: onesbill}) 

    var quartersare = Math.floor(change /25);
    console.log(quartersare)
    this.setState({quarters: quartersare}) 

    var dimesare = Math.floor(((change) - (quartersare * 25)) / 10);
    console.log(dimesare)
    this.setState({dimes: dimesare}) 

    var nickelsare = Math.floor(((change) - (quartersare * 25) - (dimesare * 10)) / 5); 
    console.log(nickelsare)   
    this.setState({nickels: nickelsare}) 

    var penniesare = Math.floor(((change) - (quartersare * 25) - (dimesare * 10) - (nickelsare * 5))) / 1;
    console.log(penniesare)
    this.setState({pennies: penniesare}) 
    //return this.calculatedue();
    var output= changeDue
    
    this.setState({output : output} )
    
    
  }

  render() {
    return (
      <form>
        <div>
          <h1>Change Calculator for checkout at a register!</h1>
          <p>This change calculator will give you the exact change in form of dollar bills and coins that is due to the customer</p>
        </div>
        <div className="container-fluid">
          <div className="row">
  
              <div className="col-4">
                <div>
                <h4>Enter information</h4>
                 </div>
                <div>
                <label>How much is due?  </label>
                <br></br>
               <input type= 'number'  name= 'amountDue' value={this.state.amountDue} onChange={this.handleChange}></input>
                </div>
                <br></br>
                <div>
                <label>How much was received?  </label>
                <input type= 'number'  name= 'amountReceived' value={this.state.amountReceived} onChange={this.handleChange}></input>
                </div>
                <br></br> 
                <div>
                <button  value={this.state.output} name="submit" onClick={this.handleClick}>Calculate</button>
                 <div name="output" id="output">{this.state.output}</div>
                 </div>
              </div>
            

            <div className="col-8">
                <div className="changeDue">
                  <h4 name='changeDue'>The total change due is {this.state.output}</h4>
                </div>
             
              <br></br>
              <div className="row">

              <div className="change" name="twenties">
                <label>
                  Twenties
                </label>
                <p id="twenties">{this.state.twenties}</p>
              </div>

              <div className="change">
              <label>
                  Tens
                </label>
                <p id="tens">{this.state.tens}</p>
              </div>

              <div className="change">
              <label>
                  Fives
                </label>
                <p id="fives">{this.state.fives}</p>
              </div>

              <div className="change" name="ones" id="ones">
              <label>
                  Ones
                </label>
                <p id="ones">{this.state.ones}</p>
              </div>

            </div>

              <div className="row">
              <div className="change" name="quarters" id="quarters">
                <label>
                  Quarters
                </label>
                <p id="quarters">{this.state.quarters}</p>
              </div>

              <div className="change" name="dimes" id="dimes">
              <label>
                  Dimes
                </label>
                <p id="dimes">{this.state.dimes}</p>
              </div>

              <div className="change" name="nickels" id="nickels">
              <label>
                  Nickels
                </label>
                <p id="nickels">{this.state.nickels}</p>
              </div>

              <div className="change" name="pennies" id="pennies">
              <label>
                  Pennies
                </label>
                <p id="pennies">{this.state.pennies}</p>
              </div>

              </div> 
            </div>   
          </div>
        </div>
      </form>
    );
  }
}

export default App;

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
    this.calculatedue = this.changedue.bind(this);  
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
    const changeDue = this.state.changeDue;
    const twenties = this.state.twenties;
    const tens = this.state.tens;
    const fives = this.state.fives;
    const ones = this.state.ones;
    const quarters = this.state.quarters;
    const dimes = this.state.dimes;
    const nickels = this.state.nickels;
    const pennies = this.state.pennies;
    const output = this.state.output;
    const dollars;

    changeDue = amountReceived - amountDue;
    dollars = int(amountReceived - amountDue);
    change = changeDue - dollars;
    twenites = Math.floor(changeDue/20);
    tens = Math.floor(((changeDue) - (twenties * 20)) / 10);
    fives = Math.floor(((changeDue) - (twenties* 20) - (tens * 10)) / 5);     
    ones = Math.floor((((changeDue) - (quarters * 5) - (dimes * 10) - (fives * 5))) / 1);

    quarters = Math.floor(change / 25);
    dimes = Math.floor(((change) - (quarters * 25)) / 10);
    nickels = Math.floor(((change) - (quarters * 25) - (dimes * 10)) / 5);    
    pennies = Math.floor(((change) - (quarters * 25) - (dimes * 10) - (nickels * 5))) / 1;
    
    //return this.calculatedue();
    return(this.setState({output : `Return amount is ${output}`} )
    )
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
                <button  value={this.state.output} name="submit" onClick={this.handleClick}>Calculate</button>
                 <div name="output" id="output">{this.state.output}</div>
              </div>
            

            <div className="col-8">
                <div className="changeDue">
                  <h4 name='changeDue'>The total change due is {this.state.changeDue}</h4>
                </div>
             
              <br></br>
              <div className="row">

              <div className="change" name="twenties">
                <label>
                  Twenties
                </label>
                <output id="twenties">{this.state.twenties}</output>
              </div>

              <div className="change" name="tens" id="tens">
              <label>
                  Tens
                </label>
                <output id="tens">{this.state.tens}</output>
              </div>

              <div className="change" name="fives" id="fives">
              <label>
                  Fives
                </label>
                <output id="fives">{this.state.fives}</output>
              </div>

              <div className="change" name="ones" id="ones">
              <label>
                  Ones
                </label>
                <output id="ones">{this.state.ones}</output>
              </div>

            </div>

              <div className="row">
              <div className="change" name="quarters" id="quarters">
                <label>
                  Quarters
                </label>
                <output id="quarters">{this.state.quarters}</output>
              </div>

              <div className="change" name="dimes" id="dimes">
              <label>
                  Dimes
                </label>
                <output id="dimes">{this.state.dimes}</output>
              </div>

              <div className="change" name="nickels" id="nickels">
              <label>
                  Nickels
                </label>
                <output id="nickels">{this.state.nickels}</output>
              </div>

              <div className="change" name="pennies" id="pennies">
              <label>
                  Pennies
                </label>
                <output id="pennies">{this.state.pennies}</output>
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

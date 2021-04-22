import React, { Component } from 'react';
import Diec from './Diec';
import './Rand.css';

class Rand extends Component {
    static defaultProps = { 
        kubiya : [
        
        {num :'one', number : 1},
        {num :'two', number : 2},
        {num :'three', number : 3},
        {num :'four', number : 4},
        {num :'five', number : 5},
        {num :'six', number : 6},
     
                ]
      } 
  
    constructor(props){
        super(props);
        this.state = { 
            die1  : {num :'one'} ,
            die2 : {num :'one'}, 
            rolling: false,
          } 
          this.roll = this.roll.bind(this) ;
    };


    roll(){ 
        const {kubiya} = this.props;

        this.setState({ 
          
          // Changing state upon click 
          die1 : kubiya[Math.floor(Math.random() * kubiya.length)], 
          die2 : kubiya[Math.floor(Math.random() * kubiya.length)], 

          rolling:true
        }) 
      
        setTimeout(() => { 
            // Set rolling to false again when time over 
            this.setState({rolling:false}) 
          },1000) 
        } 

      
    render() {
        
        let val1 = [this.state.die1.number];
        let val2 = [this.state.die2.number];
        let sum1 = val1.reduce((acc, vals) => acc + vals);
        let sum2 = val2.reduce((acc, vals) => acc + vals);
        let Total = sum1 + sum2;
        
     
        
        const Btn = this.state.rolling ? 'rolling' : '';
        const {die1, die2, rolling} = this.state ;
        
        
        return ( 
            
          <div className='RollDice'> 
                <h1 className="total">Total - {Total}</h1>
                {sum1 > sum2  ? <h1 className="Diel">Dice One Win!</h1> : ''}
                {sum2 > sum1  ? <h1 className="Die2">Dice Two Win!</h1> : ''}
                {sum1 === sum2 ?  <h1 className="Double">Double Dice! Play Again!</h1> : ''}

            <div className="Dices">
                  <h2 className="Diceone">Dice One</h2>
                  <h2 className="Dicetwo">Dice Two</h2>
            </div>

            <div className='RollDice-container'> 
                 <Diec face={die1.num} rolling={rolling}/> 
                 <Diec face={die2.num} rolling={rolling}/> 
            </div>

              <button className={Btn} onClick={this.roll}>
              {this.state.rolling ? 'Rolling...' : 'Roll !'} 
              </button> 
              
              
          </div> 
               )
    }
}
 
export default Rand;


import React, {Component} from 'react';
import './Diec.css';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fas);


 
class Diec extends Component{ 

    render(){ 
        const {face, rolling} = this.props 

    return (
        <div>
            <FontAwesomeIcon className="Diec" icon={`dice-${face}`} id={`${rolling && 'Die-shaking'}`}/>
        </div>
   
      )
      
    } 
   
} 

export default Diec;
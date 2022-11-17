import React, {Component} from 'react'; 
import Cars from './Cars';

class MyCars extends Component {
 
    state = {
        cars : ["Ford", "Mercedes", "Peugeot"]
    }


    render(){
        console.log(this)
        return (
            <div>
                <h1 style={{color: this.props.colorTitle}}>{this.props.title}</h1>
                <Cars color="red">{this.state.cars[0]}</Cars>
                <Cars >{this.state.cars[1]}</Cars>
                <Cars color="green"></Cars>
            </div>
      
        )
    }
}

export default MyCars;
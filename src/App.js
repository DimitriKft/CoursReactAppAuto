import React, {Component} from 'react';
import MyCars from './Components/MyCars';
import './App.css';

class App extends Component {


  state = {
    titre: 'Mon catalogue Voitures',
    color: 'green'
}

  render(){
    return (
      <div className="App">
        <MyCars title={this.state.titre} colorTitle={this.state.color}/>
      </div>
    );
  }

 
}

export default App;

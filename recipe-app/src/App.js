import React, { Component } from 'react';
import Search from './components/Search';
import Switch from '@material-ui/core/Switch';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.handleTheme = this.handleTheme.bind(this)
  }
  state = {
    target: undefined,
    color: "white",
    textColor: "black"
  }

  searchRecipe = async e => {
    e.preventDefault();
    const targetRecipe = e.target.elements.ingredient.value.toLowerCase();
    console.log(targetRecipe);
    this.setState({
      target: targetRecipe
    });
  }

  handleTheme(){
    console.log("change theme");
    const currColor = this.state.color;
    if(currColor==="white"){
      this.setState({
        color: "#1e272e",
        textColor: "white"
      })
    }else{
      this.setState({
        color: "white",
        textColor: "black"
      })
    }
    
  }

  render() {
    return (
      <div className="App" style={{backgroundColor: this.state.color, color: this.state.textColor}}>
       <h1>Recipe App</h1>
       <Search searchRecipe={this.searchRecipe}/>
       <p>{this.state.target}</p>
       <Switch color="primary" onChange={this.handleTheme}/>

      </div>
    );
  }
}

export default App;

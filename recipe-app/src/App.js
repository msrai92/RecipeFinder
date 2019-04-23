import React, { Component } from 'react';
import Search from './components/Search';
import Switch from '@material-ui/core/Switch';
import './App.css';
require('dotenv').config()
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
    const targetIngredient = e.target.elements.ingredient.value.toLowerCase();
    console.log(targetIngredient);
    console.log(process.env.REACT_RECIPE_API_KEYS);
    const appID = "d0347ae7";
    const appKey = "263d52c0cd59e78693367240137a3e9a";
    try {
      const recipeCall = await fetch(
        `https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=${targetIngredient}&app_id=${appID}&app_key=${appKey}`
        );
      const recipeData = await recipeCall.json();
      console.log(recipeData);
    }catch (err) {
      console.log(err);
    }
    this.setState({
      target: targetIngredient
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
      <div className="App" >
        <div className="Home" style={{backgroundColor: this.state.color, color: this.state.textColor}}>
          <div className="Header">
          <h1>Recipe App</h1>
          <div className="themeSwitch">
            <Switch className="switch" color="primary" onChange={this.handleTheme} />
            <label>Dark Mode</label>
          </div>
          
          </div>
         
          <Search searchRecipe={this.searchRecipe}/>
          <p>{this.state.target}</p>
         
        </div>
      

      </div>
    );
  }
}

export default App;

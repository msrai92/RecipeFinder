import React, { Component } from 'react';
import Search from './components/Search';
import Switch from '@material-ui/core/Switch';
import Recipe from './components/Recipe';
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
    textColor: "black",
    recipes: undefined
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
      console.log(recipeData.hits);
      this.setState({
        target: targetIngredient,
        recipes: recipeData.hits
      });
    }catch (err) {
      console.log(err);
    }
    
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

  renderRecipeList(){
    const list = [];
    if(this.state.recipes!==undefined){
    const recipes = this.state.recipes;
    for(var i=0; i<recipes.length; i++){
      const recipe = <Recipe 
      key={recipes[i].recipe.label}
      recipeName={recipes[i].recipe.label} 
      url={recipes[i].recipe.image}
      calories={recipes[i].recipe.calories.toFixed(2)}
      cautions={recipes[i].recipe.caution}
      healthFacts={recipes[i].recipe.healthLabels}
      ingredients={recipes[i].recipe.ingredients}
      />
      list.push(recipe);
    }

    }
    
    return list;
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
      
          {this.renderRecipeList()}
        </div>
      

      </div>
    );
  }
}

export default App;

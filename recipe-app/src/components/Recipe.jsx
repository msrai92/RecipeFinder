import React, { Component } from 'react';
class Recipe extends Component {
    state = {  }

    renderIngredientList(ingredients){
        const list = [];
        for(var i=0; i<ingredients.length; i++){
            const ingredient = <p>{ingredients[i].text}</p>
            list.push(ingredient);
        }
        return list;
    }

    renderHealthFacts(healthFacts){
        return <p>Health Facts list</p>
    }
    render() { 
        return ( 
        <div className="recipe">
            <div className="img-title">
                <a href={this.props.url}><h2>{this.props.recipeName}</h2></a>
                <img src={this.props.image}></img>
            </div>
            <div className="ingredients">
                <h2>Ingredients</h2>
                {this.props.ingredients &&  
                    this.renderIngredientList(this.props.ingredients)}
            </div>
            <div className="health">
                <h2>Health</h2>
                {this.props.healthFacts && this.renderHealthFacts(this.props.healthFacts)}
                <p>{this.props.calories}</p>
                <p>{this.props.cautions}</p>
            </div>
            
            
            
        </div> );
    }
}
 
export default Recipe;
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
                <h2>{this.props.recipeName}</h2>
                <img src={this.props.url}></img>
            </div>
            
            <p>{this.props.calories}</p>
            <p>{this.props.cautions}</p>
            {this.props.healthFacts && this.renderHealthFacts(this.props.healthFacts)}
            {this.props.ingredients &&  this.renderIngredientList(this.props.ingredients)}
            
        </div> );
    }
}
 
export default Recipe;
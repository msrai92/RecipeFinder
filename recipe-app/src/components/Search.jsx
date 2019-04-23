import React, { Component } from 'react';

class Search extends Component {
    state = {  }
    render() { 
        return (
        <div>
            <form onSubmit={this.props.searchRecipe}>
                <input type="text" name="ingredient">
                </input>
                <button>
                    submit
                </button>
            </form>
        </div>  );
    }
}
 
export default Search;
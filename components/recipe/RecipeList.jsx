import React, {Component} from 'react';
import Recipe from "./Recipe.jsx";

class RecipeList extends Component {

    render() {
        return (
            <div>
                {this.props.recipes.map(rec => {
                    return <Recipe recipe={rec} key={rec.id} {...this.props} />
                })}
            </div>
        )
    }
}

RecipeList.propTypes = {
    recipes: React.PropTypes.array.isRequired
};

export default RecipeList
import React, {Component} from 'react';
import Ingredient from './Ingredient.jsx';

class IngredientList extends Component {
    render() {
        return (
            <ul>{
                this.props.ingredients.map(ingred => {
                    return <Ingredient
                        ingredient={ingred}
                        key={ingred.id}
                        {...this.props}
                    />
                })
            }</ul>
        )
    }
}

IngredientList.propTypes = {
    ingredients: React.PropTypes.array.isRequired,
    setIngredient: React.PropTypes.func.isRequired,
    activeIngredient: React.PropTypes.object.isRequired
}

export default IngredientList
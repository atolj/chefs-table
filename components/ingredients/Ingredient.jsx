import React, {Component} from 'react';

class Ingredient extends Component {

    onClick(e) {
        e.preventDefault();
        const {setIngredient, ingredient} = this.props;
        setIngredient(ingredient);
    }

    render() {
        const {ingredient, activeIngredient} = this.props;
        const active = ingredient === activeIngredient ? 'active' : '';
        return (
            <li className={active}>
                <a onClick={this.onClick.bind(this)}>
                    {ingredient.ingredient.name + " x " + ingredient.ingredient.amount + ingredient.ingredient.scale}
                </a>
            </li>
        )
    }
}

Ingredient.propTypes = {
    ingredient: React.PropTypes.object.isRequired,
    setIngredient: React.PropTypes.func.isRequired,
    activeIngredient: React.PropTypes.object.isRequired
}

export default Ingredient
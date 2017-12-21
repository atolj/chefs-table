import React, {Component} from 'react';
import IngredientForm from './IngredientForm.jsx';
import IngredientList from './IngredientList.jsx';

class IngredientSection extends Component {
    render() {
        return (
            <div className='support panel panel-primary'>
                <div className='panel-heading'>
                    <strong>Ingredient</strong>
                </div>
                <div className='panel-body ingredients'>
                    <IngredientList {...this.props} />
                    <IngredientForm {...this.props} />
                </div>
            </div>

        )
    }
}

IngredientSection.propTypes = {
    ingredients: React.PropTypes.array.isRequired,
    setIngredient: React.PropTypes.func.isRequired,
    addIngredient: React.PropTypes.func.isRequired,
    activeIngredient: React.PropTypes.object.isRequired
}

export default IngredientSection
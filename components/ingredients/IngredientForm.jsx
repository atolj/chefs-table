import React, {Component} from 'react';

class IngredientForm extends Component {
    onSubmit(e) {
        e.preventDefault();
        const node = this.refs.ingredient;
        const ingredientName = node.value;
        this.props.addIngredient(ingredientName);
        node.value = '';
    }

    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <div className='form-group'>
                    <input
                        className='form-control'
                        placeholder='Add Ingredient'
                        type='text'
                        ref='ingredient'
                    />
                </div>

            </form>
        )
    }
}

IngredientForm.propTypes = {
    addIngredient: React.PropTypes.func.isRequired
}


export default IngredientForm
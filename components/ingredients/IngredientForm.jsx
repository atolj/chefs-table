import React, {Component} from 'react';

class IngredientForm extends Component {
    onSubmit(e) {
        e.preventDefault();
        const name = this.refs.name;
        const amount = this.refs.amount;
        const scale = this.refs.scale;
        this.props.addIngredient({
            name: name.value,
            amount: amount.value,
            scale: scale.value
        });
        name.value = '';
        amount.value = '';
        scale.value = '';
    }

    render() {
        return (
            <form className="form-inline justify-content-between" onSubmit={this.onSubmit.bind(this)}>
                <input
                    className='form-control col-md-7 my-2'
                    placeholder='Ingredient'
                    type='text'
                    ref='name'
                />
                <input
                    className='form-control col-md-3 my-2'
                    placeholder='100'
                    type='number'
                    ref='amount'
                />
                <input
                    className='form-control col-md-1 my-2'
                    placeholder='g'
                    type='text'
                    ref='scale'
                />

                <button type="submit" className="btn btn-outline-primary">+</button>
            </form>
        )
    }
}

IngredientForm.propTypes = {
    addIngredient: React.PropTypes.func.isRequired
}


export default IngredientForm
import React, {Component} from 'react';

class RecipeForm extends Component {
    onSubmit(e) {
        e.preventDefault();
        const node = this.refs.recipe;
        const recipeName = node.value;
        this.props.addRecipe(recipeName);
        node.value = '';
    }

    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <div className="form-group ">
                    <input type="text"  className="form-control" placeholder="Create new recipe" ref="recipe"/>
                </div>
            </form>
        )
    }
}

RecipeForm.propTypes = {
    addRecipe: React.PropTypes.func.isRequired
};

export default RecipeForm
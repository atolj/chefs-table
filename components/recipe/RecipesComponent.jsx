import React, {Component} from 'react';
import RecipeList from "./RecipeList.jsx";
import RecipeForm from "./RecipeForm.jsx";

class RecipesComponent extends Component {
    render() {
        return (
            <section>
                <div className='container'>
                    <div className='row justify-content-md-center'>
                        <div className='col-md-9'>
                            <h2>My favorit recipes</h2>
                        </div>
                    </div>
                    <div className='row justify-content-md-center'>
                        <div className='col-md-9'>
                            <RecipeList {...this.props}/>
                        </div>
                    </div>
                    <div className='row justify-content-md-center'>
                        <div className='col-md-9 mt-2'>
                            <RecipeForm {...this.props}/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

RecipesComponent.propTypes = {
    recipes: React.PropTypes.array.isRequired,
    addRecipe: React.PropTypes.func.isRequired
}

export default RecipesComponent
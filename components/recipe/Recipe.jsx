import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Recipe extends Component {

    render() {
        const {recipe} = this.props;
        let linkUrl = '/edit/' + recipe.id + '/' + recipe.name;
        return (
           <div>
               <Link className="form-control mt-2"
                     to={linkUrl}
                     style={{
                         color: '#001922',
                         textDecoration: 'none'
                    }}>{recipe.name}</Link>
           </div>
        )
    }
}

Recipe.propTypes = {
    recipe: React.PropTypes.object.isRequired
};


export default Recipe
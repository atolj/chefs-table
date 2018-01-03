import React, {Component} from 'react';
import RecipesComponent from "./recipe/RecipesComponent.jsx";
import Socket from "../socket.js"

class ListApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: [],
            activeRecipe: {},
            connected: false
        };
    }
    componentDidMount(){
        // let ws = this.ws = new WebSocket('ws://echo.websocket.org');
        let soc = this.socket = new Socket();
        soc.on('connect', this.onConnect.bind(this));
        soc.on('disconnect', this.onDisconnect.bind(this));
        soc.on('recipe add', this.onRecipeAdd.bind(this));

    }

    onConnect(){
        this.setState({connected: true});
        this.socket.emit("recipeList subscribe");
    }

    onDisconnect(){
        this.setState({connected: false});
        this.socket.emit("recipeList unsubscribe");
    }

    onRecipeAdd(recipe){
        let {recipes} = this.state;
        recipes.push(recipe);
        this.setState({recipes});
    }

    addRecipe(recipeName) {
        let {recipes} = this.state;
        this.socket.emit('recipe add', {id: recipes.length, name : recipeName});
    }

    render() {
        return (
            <div>
                <h1 className="d-block p-3 text-center text-white bg-primary b4b">Chef's table</h1>
                <RecipesComponent {...this.state} addRecipe={this.addRecipe.bind(this)}/>
            </div>
        )
    }
}

export default ListApp
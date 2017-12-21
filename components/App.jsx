import React, {Component} from 'react';
import IngredientSection from './ingredients/IngredientSection.jsx';
import InstructionSection from "./instructions/InstructionSection.jsx";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: [],
            instructions: [],
            activeIngredient: {}
        };
    }

    addIngredient(name) {
        let {ingredients} = this.state;
        ingredients.push({id: ingredients.length, name});
        this.setState({ingredients});
        // TODO: Send to server
    }

    setIngredient(activeIngredient) {
        this.setState({activeIngredient});
        // TODO: Get Ingredients Messages
    }

    addInstruction() {
        let {instructions} = this.state;
        instructions.push({id: instructions.length, value: ''});
        this.setState({instructions});
    }

    render() {
        return (
            <div className='app'>
                <div className='nav'>
                    <IngredientSection ingredients={this.state.ingredients}
                                       activeIngredient={this.state.activeIngredient}
                                       addIngredient={this.addIngredient.bind(this)}
                                       setIngredient={this.setIngredient.bind(this)} />
                </div>
                <div>
                    <InstructionSection instructions={this.state.instructions}
                                        addInstruction={this.addInstruction.bind(this)}/>
                </div>
            </div>
        )
    }
}

export default App
import React, {Component} from 'react';
import IngredientSection from './ingredients/IngredientSection.jsx';
import InstructionSection from "./instructions/InstructionSection.jsx";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: [],
            instructions: [{id: 0, value: ''}],
            activeIngredient: {},
            receipt: ''
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

    saveReceipt(){

    }

    discardReceipt(){

    }

    render() {
        return (
            <section>
                <a href="https://getbootstrap.com" className="d-block p-3 text-center text-white bg-primary b4b">There's a newer version of Bootstrap 4!</a>
                <div className='container'>
                    <div className='row '>
                        <h2>{this.state.receipt}</h2>
                    </div>
                    <div className='row justify-content-md-center'>
                        <div className='col-md-9'>
                            <IngredientSection ingredients={this.state.ingredients}
                                               activeIngredient={this.state.activeIngredient}
                                               addIngredient={this.addIngredient.bind(this)}
                                               setIngredient={this.setIngredient.bind(this)} />
                        </div>
                    </div>
                    <div className='row justify-content-md-center'>
                        <div className='col-md-9'>
                            <InstructionSection instructions={this.state.instructions} />
                        </div>
                    </div>
                    <div className='row justify-content-md-center'>
                        <div className='col-md-9'>
                            <button type="button" className="btn btn-danger" onClick={this.discardReceipt.bind(this)}>Cancel</button>
                            <button type="button" className="btn btn-success" onClick={this.saveReceipt.bind(this)}>Save</button>
                            <button type="button" className="btn btn-primary float-right" onClick={this.addInstruction.bind(this)}>+</button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default App
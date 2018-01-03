import React, {Component} from 'react';
import IngredientSection from './ingredients/IngredientSection.jsx';
import InstructionSection from "./instructions/InstructionSection.jsx";
import {Link} from "react-router-dom";
import Socket from "../socket.js"

class EditApp extends Component {
    constructor(props) {
        super(props);
        this.recipeId = this.props.match.params.recipeId;
        this.recipeName = this.props.match.params.recipeName;
        this.state = {
            ingredients: [],
            instructions: [{id: 0, value: ''}],
            activeIngredient: {},
            receipt: '',
            connected: false
        };
    }

    componentDidMount(){
        // let ws = this.ws = new WebSocket('ws://echo.websocket.org');
        let soc = this.socket = new Socket();
        soc.on('connect', this.onConnect.bind(this));
        soc.on('disconnect', this.onDisconnect.bind(this));
        soc.on('ingredient add', this.onIngredientAdd.bind(this));
        soc.on('instruction add', this.onInstructionAdd.bind(this));
        soc.on('instruction edit', this.onInstructionEdit.bind(this));
    }

    onConnect(){
        this.setState({connected: true});
        this.socket.emit("ingredient subscribe");
        this.socket.emit("instruction subscribe");
    }

    onDisconnect(){
        this.setState({connected: false});
        this.socket.emit("ingredient unsubscribe");
        this.socket.emit("instruction unsubscribe");
    }

    onIngredientAdd(ingredient) {
        let {ingredients} = this.state;
        ingredients.push(ingredient);
        this.setState({ingredients});
    }

    addIngredient(ingredient) {
        let {ingredients} = this.state;
        this.socket.emit('ingredient add', {id: ingredients.length, ingredient});
    }

    setIngredient(activeIngredient) {
        this.setState({activeIngredient});
        // TODO: Get Ingredients Messages
    }

    onInstructionAdd(instruction) {
        let {instructions} = this.state;
        instructions.push(instruction);
        this.setState({instructions});
    }

    onInstructionEdit(ingredient) {
        this.socket.emit('ingredient edit', {ingredient});
    }

    addInstruction() {
        let {instructions} = this.state;
        this.socket.emit('instruction add', {id: instructions.length, value: ''});
    }

    render() {
        return (
            <section>
                <h1 className="d-block p-3 text-center text-white bg-primary b4b">Chef's table</h1>
                <div className='container'>
                    <div className="row justify-content-md-center">
                        <div className='col-md-9'>
                            <h2>{this.recipeName}</h2>
                        </div>
                    </div>
                    <div className='row justify-content-md-center'>
                        <div className='col-md-9'>
                            <IngredientSection {...this.state}
                                               addIngredient={this.addIngredient.bind(this)}
                                               setIngredient={this.setIngredient.bind(this)} />
                        </div>
                    </div>
                    <div className='row justify-content-md-center'>
                        <div className='col-md-9'>
                            <InstructionSection {...this.state} />
                        </div>
                    </div>
                    <div className='row justify-content-md-center'>
                        <div className='col-md-9'>
                            <button type="button" className="btn btn-outline-primary btn-block" onClick={this.addInstruction.bind(this)}>+</button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default EditApp
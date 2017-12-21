import React, {Component} from 'react';

class Instruction extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const {instruction} = this.props;
        instruction.value =  event.target.value;
        this.setState(instruction);
    }

    render() {
        const {instruction} = this.props;
        return <div className="form-group">
                    <label>Step {instruction.id + 1}:</label>
                    <textarea className="form-control" rows="5" value={instruction.value} onChange={this.handleChange}/>
               </div>

    }
}

Instruction.propTypes = {
    instruction: React.PropTypes.object.isRequired
}

export default Instruction
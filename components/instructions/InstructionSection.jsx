import React, {Component} from 'react';
import InstructionList from './InstructionList.jsx';

class InstructionSection extends Component {

    render() {
        return (
            <div>
                <InstructionList instructions={this.props.instructions}/>
                <button type="button" className="btn" onClick={this.props.addInstruction}>Add Step</button>
            </div>
        )
    }
}

InstructionSection.propTypes = {
    instructions: React.PropTypes.array.isRequired,
    addInstruction: React.PropTypes.func.isRequired
}

export default InstructionSection
import React, {Component} from 'react';
import InstructionList from './InstructionList.jsx';

class InstructionSection extends Component {

    render() {
        return (
            <div>
                <InstructionList instructions={this.props.instructions}/>
            </div>
        )
    }
}

InstructionSection.propTypes = {
    instructions: React.PropTypes.array.isRequired
}

export default InstructionSection
import React, {Component} from 'react';
import Instruction from './Instruction.jsx';

class InstructionList extends Component {

    render() {
        return (
            <div>{this.props.instructions.map(instruct => {
                        return <Instruction
                                instruction={instruct}
                                key={instruct.id}
                            />
                        })
                 }
            </div>
        )
    }
}

InstructionList.propTypes = {
    instructions: React.PropTypes.array.isRequired
}

export default InstructionList
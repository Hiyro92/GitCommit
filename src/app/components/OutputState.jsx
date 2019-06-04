import React from 'react';
import styles from './OutputState.css'

const OutputState = (props) => {
    const outputName = props.name;
    const outputState = props.state;
    
    return (
        <div >
            <p className = {styles.stateDeactiv}>{outputName}</p>
        </div>
    )
}

export default OutputState;
import React from 'react';

const InlineError = (props) => {
    return (
        <span style={{color:"#F44336"}}>{props.text}</span>
    );
};

export default InlineError;
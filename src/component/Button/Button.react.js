import React from 'react';



const Button = (props) => {

    return (
        <div >
            <button onClick={props.action}>{props.label}</button>
        </div>
    );

}

export default Button;
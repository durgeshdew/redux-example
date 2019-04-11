import React from 'react';
import { connect } from 'react-redux';
import store from '../../stores/Store'
import { birthDayGreeting } from '../../actions/action';


const greeting = () => {
    store.dispatch(birthDayGreeting("Happy new Year"))
}
const special = (props) => {

    return (
        <div >
            {props.text}
            <button onClick={greeting}>Special Event</button>
        </div>
    );

}

const mapStatetoProps = (state) => {
    return {
        text: state.text
    };
}


export default connect(mapStatetoProps)(special);
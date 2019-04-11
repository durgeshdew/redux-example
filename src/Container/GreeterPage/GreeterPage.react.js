import React from 'react';
import Button from '../../component/Button/Button.react'
import { connect } from 'react-redux';
import store from '../../stores/Store'
import { birthDayGreeting, weddingGreeting } from '../../actions/action';

class GreeterPage extends React.Component {
    //constructor(props) {
    // super(props);
    // this.state = {
    //    text: 'Hello'
    // }
    // }
    bithDayGreeting = () => {
        store.dispatch(birthDayGreeting("Happy Birthday"))
    }
    weddingGreeting = () => {
        store.dispatch(weddingGreeting("Happy Anniversary"))
    }
    render() {
        return (
            <div>
                <h2>{this.props.text}</h2>
                <Button action={this.bithDayGreeting} label='Birthday' />
                <Button action={this.weddingGreeting} label='Wedding Day' />
            </div>
        );
    }
}

//to connect based on the redux process. See the redux slide
const mapStatetoProps = (state) => {
    return {
        text: state.text
    };
}


export default connect(mapStatetoProps)(GreeterPage);
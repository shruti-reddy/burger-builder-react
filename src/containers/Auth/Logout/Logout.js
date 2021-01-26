import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

import * as actions from '../../../store/actions/index';

class Logout extends Component {

    componentDidMount() {
        this.props.onLogOut();
    }

    render() {
        return (
            <Redirect to="/" />
        )
    }
}

// const mapStateToProps = state => {
//     return {

//     }
// }

const mapDispatchToProps = dispatch => {
    return {
        onLogOut: () => dispatch(actions.logout())
    }
}

export default connect(null, mapDispatchToProps)(Logout);
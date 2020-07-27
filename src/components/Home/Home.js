import React from 'react'
import './Home.css';
import { connect } from "react-redux";
import { Button } from '@material-ui/core';
import * as ActionTypes from '../../Store/Action/Action';


const Home = (props) => {

    const logout = () => {
        props.signInFun(false);
        props.adminLogin(false);
        props.history.push('/');
    }

    return (
        <div className="position" >
            <Button onClick={() => logout()}>Logout</Button>
            <div className="pos">
                {props.isAdmin ? 'Admin Login' : 'User Login'}
            </div>
        </div >
    );

}


const mapStateToProps = state => {
    return {
        list: state.list,
        isAdmin: state.isAdmin
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        signInFun: (isSignedIn) => {
            dispatch({
                type: ActionTypes.signInFun,
                payload: {
                    "isSignedIn": isSignedIn
                }
            })
        },
        adminLogin: (isAdmin) => {
            dispatch({
                type: ActionTypes.adminLogin,
                payload: {
                    "isAdmin": isAdmin
                }
            })
        },

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

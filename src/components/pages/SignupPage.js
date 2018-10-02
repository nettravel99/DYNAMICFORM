import React from "react";
import SignupForm from "../Forms/SignupForm";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {signup} from "../../actions/users";

class SignupPage extends React.Component {
    // pass data to Thunk action  and it will return a promise If everything is  ok
    // redirect to home page otherwise back to login with an error.

    submit = (data // NOTE login is called or ( dispatched to the login action see connect below)
    ) => this
        .props
        .signup(data)
        .then(() => this.props.history.push("/dashboard") //if succesful go to dashboard
        );

    render() {
        return (
            <div>
                <h1>Signup Page</h1>
                <SignupForm submit={this.submit}/>
            </div>
        );
    }
}

SignupPage.propTypes = {
    history: PropTypes
        .shape({push: PropTypes.func.isRequired})
        .isRequred,
    login: PropTypes.func.isRequred
};

export default connect(null, {signup})(SignupPage);
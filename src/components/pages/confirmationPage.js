import React, {Component} from 'react'
import {Message, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import {confirm} from '../../actions/auth'
import {connect} from 'react-redux'

class ComfirmationPage extends Component {
    state = {

        loading: true,
        success: false
    }

    componentDidMount() {
        this
            .props
            .confirm(this.props.match.params.token)
            .then(() => this.setState({loading: false, success: true}))
            .catch(() => this.setState({loading: false, success: false}))

    }

    render() {
        const {loading, success} = this.state;
        return (
            <div>
                {loading && <Message icon>
                    <Icon name="circle notched" loading/>
                    <Message.Header>
                        Validating your email</Message.Header>

                </Message>}

                {!loading && success && <Message success icon>
                    <Icon name="checkmark"/>
                    <Message.Content>
                        <Message.Header>
                            Your account has been verified</Message.Header>
                        <Link to="/dashboard">Go to dashboard</Link>
                    </Message.Content>
                </Message>}

            </div>
        )
    }
}

export default connect(null, {confirm})(ComfirmationPage);
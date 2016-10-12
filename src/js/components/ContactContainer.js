import React from 'react';
import axios from 'axios';

import Contact from '../pages/Contact';

class ContactContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            message: "",
            isValid: true
        }
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    handleEmailChange(e) {
        this.setState({
            email: e.target.value
        })
    }

    handleMessageChange(e) {
        this.setState({
            message: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
           isValid: false
        });

        axios.defaults.timeout = 5000;
        axios.post('/api/send', {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }).then(function(response) {
            console.log(response);
            window.alert('Email successfully sent!');
            this.setState({
                name: "",
                email: "",
                message: ""
            })
        }.bind(this)).catch(function(error) {
            console.log(error);
            window.alert('Email failed to send.  Please try again.');
            this.setState({
                isValid: true
            })
        }.bind(this))
    }

    render() {
        return (
            <Contact
                name={this.state.name}
                email={this.state.email}
                message={this.state.message}
                onNameChange={this.handleNameChange.bind(this)}
                onEmailChange={this.handleEmailChange.bind(this)}
                onMessageChange={this.handleMessageChange.bind(this)}
                onSubmit={this.handleSubmit.bind(this)}
                isValid={this.state.isValid}/>
        );
    }
}

export default ContactContainer;
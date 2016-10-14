import React from 'react';
import axios from 'axios';
import validator from 'validator';

import Contact from '../pages/Contact';

class ContactContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            message: "",
            nameValidity: "PRISTINE",
            emailValidity: "PRISTINE",
            messageValidity: "PRISTINE"
        }
    }

    handleInputChange(e) {
        const inputName = e.target.name;
        const inputValue = e.target.value;
        console.log(inputName, ": ", inputValue);
        console.log(inputName + "Validity", ": ", handleInputValidity(inputName, inputValue));
        this.setState({
            [inputName]: inputValue,
            [inputName + "Validity"]: handleInputValidity(inputName, inputValue)
        })
    }

    handleSubmit(e) {
        e.preventDefault();

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
                message: "",
                nameValidity: "PRISTINE",
                emailValidity: "PRISTINE",
                messageValidity: "PRISTINE"
            })
        }.bind(this)).catch(function(error) {
            console.log(error);
            window.alert('Email failed to send.  Please try again.');
        }.bind(this))
    }

    render() {
        return (
            <Contact
                name={this.state.name}
                email={this.state.email}
                message={this.state.message}
                nameValidity={this.state.nameValidity}
                emailValidity={this.state.emailValidity}
                messageValidity={this.state.messageValidity}
                onInputChange={this.handleInputChange.bind(this)}
                onSubmit={this.handleSubmit.bind(this)}/>
        );
    }
}

function handleInputValidity(input, value) {
    switch(input) {
        case "name": {
            if(!validator.matches(value, /[A-Za-z ]/))
                return "Name must only contain letters and spaces.";
            if(!validator.isLength(value, {min: 2}))
                return "Name must contain at least 2 letters.";
            else
                return "";
        }
        case "email": {
            if(!validator.isEmail(value))
                return "Email must be a valid email address.";
            else
                return "";
        }
        case "message": {
            if(!validator.isLength(value, {min: 10}))
                return "Message must contain at least 10 characters.";
            else
                return "";
        }
    }
}

export default ContactContainer;
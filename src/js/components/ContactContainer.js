import React from 'react';

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

/*        emailjs.init("user_VLNfBRixdyOvPpzV0lRzC");
        emailjs.send("gmail", "jeremyhertztemplate", {
            from_name: this.state.name,
            from_email: this.state.email,
            message
        }).then(function(response) {
            console.log("Email successfully Sent!", response);
            window.alert("Email successfully Sent!");
            this.setState({
                name: "",
                email: "",
                message: ""
            });
        }).catch(function(error) {
            console.log("There was an error sending the email.", error);
            window.alert("There was an error sending the email.  Please try again.");
            this.setState({
                isValid: true
            });
        })*/

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
import React from "react";

function Contact(props) {
    return(
        <div id="contact">
            <h3>Please feel free to send me a message!</h3>
            <form onSubmit={props.onSubmit}>
                <input
                    type="text"
                    value={props.name}
                    placeholder="Name"
                    onChange={props.onNameChange}/>
                <input
                    type="email"
                    value={props.email}
                    placeholder="Email"
                    onChange={props.onEmailChange}/>
                <textarea
                    type="text"
                    value={props.message}
                    placeholder="Your Message..."
                    rows="6"
                    onChange={props.onMessageChange}/>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

Contact.propTypes = {
    name: React.PropTypes.string.isRequired,
    email: React.PropTypes.string.isRequired,
    message: React.PropTypes.string.isRequired,
    onNameChange: React.PropTypes.func.isRequired,
    onEmailChange: React.PropTypes.func.isRequired,
    onMessageChange: React.PropTypes.func.isRequired,
    onSubmit: React.PropTypes.func.isRequired,
    isValid: React.PropTypes.bool.isRequired
};

export default Contact;
import React from "react";

function getValidClass(validity) {
    if(validity === "PRISTINE") return "";
    if(validity === "") return "valid";

    return "invalid"
}

function ValidImage(props) {
    if(props.validity != "PRISTINE")
        return props.validity === "" ?
            <img src="./images/checked.svg"/> :
            <img src="./images/unchecked.svg"/>;

    return null;
}

ValidImage.propTypes = {
    validity: React.PropTypes.string.isRequired
};

function Contact(props) {
    return(
        <div id="contact">
            <div className="section-title">
                <h3>CONTACT ME!</h3>
            </div>
            <div className="section-content">
                <form onSubmit={props.onSubmit}>
                    <div className="input-section">
                        <input
                            type="text"
                            name="name"
                            className={getValidClass(props.nameValidity)}
                            value={props.name}
                            placeholder="Name"
                            onChange={props.onInputChange}/>
                        <span><ValidImage validity={props.nameValidity}/></span>
                    </div>
                    <div className="input-section">
                        <input
                            type="email"
                            name="email"
                            className={getValidClass(props.emailValidity)}
                            value={props.email}
                            placeholder="Email"
                            onChange={props.onInputChange}/>
                        <span><ValidImage validity={props.emailValidity}/></span>
                    </div>
                    <div className="input-section">
                        <textarea
                            name="message"
                            className={getValidClass(props.messageValidity)}
                            value={props.message}
                            placeholder="Your Message..."
                            rows="6"
                            onChange={props.onInputChange}/>
                        <span><ValidImage validity={props.messageValidity}/></span>
                    </div>
                    <div>
                        <button type="submit" disabled>SEND</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

Contact.propTypes = {
    name: React.PropTypes.string.isRequired,
    email: React.PropTypes.string.isRequired,
    message: React.PropTypes.string.isRequired,
    nameValidity: React.PropTypes.string.isRequired,
    emailValidity: React.PropTypes.string.isRequired,
    messageValidity: React.PropTypes.string.isRequired,
    onInputChange: React.PropTypes.func.isRequired,
    onSubmit: React.PropTypes.func.isRequired
};

export default Contact;
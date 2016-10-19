import React from 'react';

import Navbar from './layout/Navbar';

class NavbarContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHidden: true
        }
    }

    handleHiddenToggle() {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    render() {
        return (
            <Navbar
                isHidden={this.state.isHidden}
                onHiddenToggle={this.handleHiddenToggle.bind(this)}/>
        );
    }
}

export default NavbarContainer;
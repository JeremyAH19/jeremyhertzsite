import React from 'react';
import axios from 'axios';

import Resume from '../pages/Resume';

class ResumeContainer extends React.Component {
    constructor(props) {
        super(props);
        this.docxUrl = '';
        this.pdfUrl = ''
    }

    componentWillMount() {
        axios.all([axios.get('/api/resume/docx'), axios.get('api/resume/pdf')])
            .then(function(urls) {
                this.docxUrl = urls[0].data;
                this.pdfUrl = urls[1].data
            }.bind(this)).catch(function(error) {
                console.log(error)
        })
    }

    handleDownloadClick(e) {
        e.target.name === 'docx' ?
            window.location.href = this.docxUrl :
            window.location.href = this.pdfUrl
    }

    render() {
        return (
            <Resume onDownloadClick={this.handleDownloadClick.bind(this)}/>
        );
    }
}

export default ResumeContainer;
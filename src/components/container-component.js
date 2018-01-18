import React, { Component } from 'react';
import axios from 'axios'
import config from '../config';

class ContainerComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {json: []};
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        
    }

    handleClick() {
        var instance = axios.create({
            baseURL: config.TRACKER_SERVICE_BASE_URL
        });

        instance.get("/stories")
        .then((response) => {
            console.log(response)
        }).catch((ex) => {
            console.log(ex);
        })
    }

    render() {
        return (
            <div className='button__container'>
                <button className='button' onClick={this.handleClick}>Refresh</button>
            </div>
        )
    }
}

export default ContainerComponent;


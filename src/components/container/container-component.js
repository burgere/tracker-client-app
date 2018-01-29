import React, { Component } from 'react';
import axios from 'axios'
import config from '../../config';
import './container.css';
import StoryTagComponent from '../story-tag/story-tag-component';
import _ from 'underscore';

class ContainerComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {data: []};
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        this.handleClick()
    }

    handleClick() {
        var instance = axios.create({
            baseURL: config.TRACKER_SERVICE_BASE_URL
        });

        instance.get("/stories")
        .then((response) => {
            this.refresh(response)
        }).catch((ex) => {
            console.log(ex);
        })
    }

    refresh(data) {
        this.setState({
            data: data
        })
    }

    render() {
        let storyData = this.state.data;
        var tagsList = []
        if (storyData.length !== 0) {
            tagsList = _.map(storyData.data, (story) => {
                return (<StoryTagComponent story = { story }></StoryTagComponent>);
            })
        }
        return (
            <div className='container'>
                { tagsList }
            </div>
        )
    }
}

export default ContainerComponent;


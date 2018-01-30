import React, { Component } from 'react';
import axios from 'axios'
import config from '../../config';
import './container.css';
import StoryTagComponent from '../story-tag/story-tag-component';
import _ from 'underscore';

class ContainerComponent extends Component {
    constructor(props) {
        super(props);

        this.interval = null;
        this.state = {userData: [], storyData: []};
    }

    componentWillMount() {
        this.interval = setInterval(this.getStories(), 5000);
    }

    componentDidMount() {
        
    }

    getStories() {
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

    refreshStories(storyData) {
        this.setState({
            storyData: storyData
        })
    }

    refreshUsers(userData) {
        this.setState({
            userData: userData
        })
    }

    render() {
        let storyData = this.state.storyData;
        var tagsList = []
        if (storyData.length !== 0) {
            tagsList = _.map(storyData.data, (story) => {
                return (<StoryTagComponent story = { story }></StoryTagComponent>);
            })
        }

        var userList = []
        if (userData.length !== 0) {
            userList = _.map(userData.data, (user) => {
                return (<UserTagComponent user = { user }></UserTagComponent>)
            })
        }
        return (
            <div className='container container-fluid jumbotron'>
                <h1> Tracker Display (Beta) </h1>
                {/* <div>{ tagsList }</div> */}
                <div>{ userList }</div>
            </div>
        )
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
}

export default ContainerComponent;


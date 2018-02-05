import React, { Component } from 'react';
import axios from 'axios'
import config from '../../config';
import './container.css';
import StoryTagComponent from '../story-tag/story-tag-component';
import UserTagComponent from '../user-tag/user-tag-component';
import _ from 'underscore';
import PropTypes from 'prop-types';

class ContainerComponent extends Component {
    constructor(props) {
        super(props);

        this.interval = null;
        this.state = {userData: [], storyData: [], loading: false};
    }

    componentWillMount() {
        this.getUsers()
    }

    componentDidMount() {
        setInterval(() => { this.getUsers() }, 30000)
    }

    getStories() {
        var instance = axios.create({
            baseURL: config.TRACKER_SERVICE_BASE_URL
        });

        instance.get("/stories")
        .then((response) => {
            this.refreshStories(response)
        }).catch((ex) => {
            console.log(ex);
        })
    }

    getUsers() {
        this.setState({
            loading: true
        })

        var instance = axios.create({
            baseURL: config.TRACKER_SERVICE_BASE_URL
        });

        instance.get("/people")
        .then((response) => {
            this.refreshUsers(response)
        }).catch((ex) => {
            console.log(ex);
        })
    }

    refreshStories(storyData) {
        this.setState({
            storyData: storyData,
            loading: false
        })
    }

    refreshUsers(userData) {
        this.setState({
            userData: userData,
            loading: false
        })
    }

    render() {
        let storyData = this.state.storyData;
        let userData = this.state.userData;

        var tagsList = []
        if (storyData.length !== 0) {
            tagsList = _.map(storyData.data, (story) => {
                return (<StoryTagComponent story = { story }></StoryTagComponent>);
            })
        }

        var userList = []
        if (userData.length !== 0) {
            userList = _.map(userData.data, (user) => {
                return (<div className="col-4"><UserTagComponent user = { user }></UserTagComponent></div>)
            })
        }
        return (
            <div className='container'>
                    <div className="row">
                    {/* <div>{ tagsList }</div> */}
                        <div className="row">{ userList }</div>
                    </div>
                </div>
        )
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
}

export default ContainerComponent;


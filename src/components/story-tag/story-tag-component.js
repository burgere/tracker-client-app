import React, { Component } from 'react';
import config from '../../config';
import './story-tag-component.css';
import _ from 'underscore';

class StoryTagComponent extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }

    render() {
        var storyUserNames = _.map(this.props.story.usernames, (username) => {
            return(<div> { username } </div>)
        });
        return (
            <div>
               <div>{ this.props.story.name }</div>
               <div>{ storyUserNames }</div>
            </div>

        )
    }
}

export default StoryTagComponent;


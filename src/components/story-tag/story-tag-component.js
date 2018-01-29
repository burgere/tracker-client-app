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
            return(<li className = "list-group-item"> { username } </li>)
        });
        return (
            <div className = "row">
                <div className = "col-lg-6">
                <h6 className="">{ this.props.story.name }</h6>
                <div className="panel-body">
                        <ul className="btn-group">
                            { storyUserNames }
                        </ul>
                </div>
                </div>
            </div>
        )
    }
}

export default StoryTagComponent;


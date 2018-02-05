import React, { Component } from 'react';
import config from '../../config';
import './user-tag-component.css';
import _ from 'underscore';
import classNames from 'classnames';
import FaStar from 'react-icons/lib/fa/star';
import FaCog from 'react-icons/lib/fa/cog';
import FaBug from 'react-icons/lib/fa/bug';

class UserTagComponent extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }

    render() {
        var storyUserNames = _.map(this.props.user.stories, (story) => {
            var storyClass = 'glyphicon'
            if (story.type === 'feature') {
                return(<li className = "list-group-item story"><FaStar className="story-icon" /> { story.name } </li>)
            } else if (story.type === 'chore') {
                return(<li className = "list-group-item story"><FaCog /> { story.name } </li>)
            } else if (story.type === 'bug') {
                return(<li className = "list-group-item story"><FaBug /> { story.name } </li>)
            }
        });
        return (
        <div className = "user-tag">
                <h6 className="page-header">{ this.props.user.key }</h6>
                <div className="">
                        <ul className="list-group">
                            { storyUserNames }
                        </ul>
                </div>
            </div>
        )
    }
}

export default UserTagComponent;


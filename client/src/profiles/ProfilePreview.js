import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class ProfilePreview extends Component {
    render() {
        return (
            <div className="cat-preview">
                <Link to={`/cats/${this.props.id}`} className="profile-preview">
                    <span className="profile-preview-name">{this.props.name}</span>
                    <img src={this.props.images[0]} alt="cat" className="cat-img"/>

                    <div className="paw-wrapper">
                    <i className="fas fa-paw"/>
                    <i className="fas fa-paw"/>
                    <i className="fas fa-paw"/>
                    </div>

                </Link>

            </div>
        )
    };
}

export default ProfilePreview;
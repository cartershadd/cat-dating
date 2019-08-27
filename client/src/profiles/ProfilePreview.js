import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import test from '../images/test.jpg';


class ProfilePreview extends Component {
    render() {
        return (
            <Fragment className="cat-preview">
                <Link to={`/cats/${this.props.id}`} className="profile-preview">
                    <span className="profile-preview-name">{this.props.name}</span>
                    <img src={test} alt="cat" className="cat-img"/>

                    <div className="paw-wrapper">
                    <i className="fas fa-paw"/>
                    <i className="fas fa-paw"/>
                    <i className="fas fa-paw"/>
                    </div>

                </Link>

            </Fragment>
        )
    };
}

export default ProfilePreview;
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';

class ProfilePreview extends Component {
    render() {
        return (
            <Card style={{width: '18rem'}}>
                <Link to={`/cats/${this.props.id}`} className="profile-preview">
                    <Card.Title>{this.props.name}</Card.Title>
                    <Card.Img src={this.props.images[0]} alt="cat"/>

                    <div className="paw-wrapper">
                    <i className="fas fa-paw"/>
                    <i className="fas fa-paw"/>
                    <i className="fas fa-paw"/>
                    </div>

                </Link>
            </Card>
        )
    };
}

export default ProfilePreview;
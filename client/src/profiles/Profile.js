import React, {Component} from 'react';
import axios from "axios";

class Profile extends Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
            cat: {
                name: '',
                sex: '',
                images: [],
                about: '',
                badges: []
            }
        };
    }

    componentDidMount() {
        const catsUrl = `/api/cats/${this.props.match.params.id}`;

        axios.get(catsUrl).then(response => response.data)
            .then((data) => {
                this.setState({cat: data});
            });
    }

    render() {
        return (
            <div className="cat-profile">
                <h1 className="name">{this.state.cat.name}</h1>

                {this.state.cat.images.map((image, index) => (
                    <span key={index} className="image-wrapper">
                        <img src={image} className="profile-picture" alt="cat"/>
                    </span>
                ))}

                <p className="about">{this.state.cat.sex}</p>
                <p className="about">{this.state.cat.about}</p>

                {this.state.cat.badges.map((badge, index) => (
                    <span key={index} className="badge">
                        {badge}
                    </span>
                ))}

            </div>
        )
    };
}

export default Profile;

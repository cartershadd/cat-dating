import React, {Component} from 'react';
import axios from "axios";
import test from '../images/test.jpg';

class Profile extends Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
            cat: {
                name: '',
                sex: '',
                // image: [],
                about: '',
                badges: []
            }
        };

    }

    componentDidMount() {
        const url = 'http://localhost:5000';
        const catsUrl = `${url}/api/cats/${this.props.match.params.id}`;

        axios.get(catsUrl).then(response => response.data)
            .then((data) => {
                this.setState({cat: data});
            });
    }

    render() {
        return (
            <div className="cat-profile">
                <h1 className="name">{this.state.cat.name}</h1>
                <img src={test} className="profile-picture" alt="cat"/>
                <p className="about">{this.state.cat.sex}</p>
                <p className="about">{this.state.cat.about}</p>

                {this.state.cat.badges.map((badge) => (
                    <span className="badge">
                        {badge}
                    </span>
                ))}

            </div>
        )
    };
}

export default Profile;

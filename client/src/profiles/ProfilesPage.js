import React, {Component} from 'react';
import ProfilePreview from './ProfilePreview';
import axios from 'axios';

class ProfilesPage extends Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {cats: []};
    }

    componentDidMount() {
        const url = process.env.API_URL;
        const catsUrl = `${url}/api/cats/`;
        axios.get(catsUrl).then(response => response.data)
            .then((data) => {
                this.setState({cats:data});
            });
    }

    render() {
        return (
            <div className="profile">
                {this.state.cats.map((value, index) => {
                    return <ProfilePreview key={index} id={value._id} name={value.name} images={value.images} sex={value.sex} about={value.about}/>
                })}
            </div>
        )
    };
}

export default ProfilesPage;
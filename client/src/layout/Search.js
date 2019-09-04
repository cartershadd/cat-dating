import React, {Component} from 'react';
import axios from 'axios';
import ProfilePreview from "../profiles/ProfilePreview";

class Search extends Component {
    state = {
        text: '',
        cats: [],
        showNoResults: false,
    };

    searchCats = async text => {
            const catUrl = `/api/cats/search/${text}`;

            axios.get(catUrl).then(response => response.data)
                .then((data) => {
                    this.setState({cats:data});
                    this.setState({showNoResults: this.state.cats.length === 0});
                });

        };

        onSubmit = (e) => {
            e.preventDefault();
            this.searchCats(this.state.text);
            this.setState({text: ''});
        };

        onChange = (e) => {
            this.setState({[e.target.name]: e.target.value});
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input
                        type="text"
                        name="text"
                        placeholder="Search cats..."
                        className="search-bar"
                        value={this.state.text}
                        onChange={this.onChange}
                    />
                    <input
                        type="submit"
                        value="Search"
                        className="search-btn"
                    />
                </form>
                <div className="search-results">
                    {this.state.cats.map((value, index) => {
                        return <ProfilePreview key={index} id={value._id} images={value.images} name={value.name} />
                    })}
                    { this.state.showNoResults
                        ? <div className="profile-preview">No results.</div>
                        : <div/>
                    }
                </div>
            </div>
        );
    }
}

export default Search;
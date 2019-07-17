import React, {Component} from 'react';
import axios from 'axios';

class Search extends Component {
    state = {
        text: ''
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.searchUsers(this.state.text);
        this.setState({text: ''});
    };

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    searchUsers = async text => {
        const res = await axios.get();

        this.setState({profile: res.data.items, loading: false})
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input
                        type="text"
                        name="text"
                        placeholder="Search profiles..."
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
            </div>
        );
    }
}

export default Search;
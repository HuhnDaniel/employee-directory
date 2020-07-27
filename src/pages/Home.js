import React, { Component } from 'react';
import Header from "../components/Header";
import Table from "../components/Table";
import API from "../utils/API";

class Home extends Component {
    state = {
        search: "",
        users: [],
        toDisplay: []
    };

    componentDidMount() {
        API.getUsers()
            .then(({ data }) => {
                this.setState({
                    users: data.results,
                    toDisplay: data.results
                });
            })
            .catch(err => console.error(err));
    }

    handleFormSubmit = event => {
        event.preventDefault();

        
    }

    render() {
        return (
            <div>
                <Header />
                <Table toDisplay={this.state.toDisplay} />
            </div>
        );
    }
}

export default Home;
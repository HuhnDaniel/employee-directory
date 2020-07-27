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

    handleInputChange = event => {
      this.setState({ search: event.target.value });
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
        
        this.setState({
            toDisplay: this.state.users.filter(user => user.name.first.toLowerCase().includes(this.state.search.toLowerCase()) || user.name.last.toLowerCase().includes(this.state.search.toLowerCase()))
        });
    }

    render() {
        return (
            <div>
                <Header />
                <Table toDisplay={this.state.toDisplay} handleFormSubmit={this.handleFormSubmit} handleInputChange={this.handleInputChange} />
            </div>
        );
    }
}

export default Home;
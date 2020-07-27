import React, { Component } from 'react';
import Header from "../components/Header";
import Table from "../components/Table";
import API from "../utils/API";

class Home extends Component {
    state = {
        search: "",
        users: [],
        toDisplay: [],
        sort: "none"
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

    handleButtonClick = () => {
        if (this.state.sort === "none" || this.state.sort === "down") {
            this.setState({
                sort: "up",
                toDisplay: this.state.toDisplay.sort((a, b) => a.dob.age - b.dob.age)
            });
        } else {
            this.setState({
                sort: "down",
                toDisplay: this.state.toDisplay.sort((a, b) => b.dob.age - a.dob.age)
            });
        }
    }

    render() {
        return (
            <div>
                <Header />
                <Table toDisplay={this.state.toDisplay} handleFormSubmit={this.handleFormSubmit} handleInputChange={this.handleInputChange} handleButtonClick={this.handleButtonClick} />
            </div>
        );
    }
}

export default Home;
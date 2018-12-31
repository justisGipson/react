import React, { Component } from 'react';
import FormResults from './FormResults';
import styled from 'styled-components';

const SearchInput = styled.input`
    margin-top: 10px;
    width: 250px;
    margin-bottom: 10px;
    padding-left: 10px;
    color: gray;
`;

export class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            results: []
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    handleKeyUp = (e) => {
        const key = '495f584fe237cfd3528d4d8f8b99f371';

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en_US&query=${e.target.value}&page=1&include_adult=false`)
            .then(response => {
                if(response.status !== 200){
                    console.log('Error: ' + response.status);
                    return;
                }
            response.json().then(date => {
                const results = date.results;
                this.setState({results});
            });
        })
        .catch(err => {
            console.log('Fetch Error :-S', err);
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} id='form'>
                <SearchInput onKeyUp={this.handleKeyUp} id="searchInput" className='SearchBars' type='text' placeholder='Search a movie' required />
                <FormResults results={this.state.results} />
            </form>
        );
    }
}
import React, { Component } from 'react';

export default class ReactConceptsApp extends Component {
    render(){
        return (
            <div className='main'>
                <div className='mainDiv'>
                    <h1>Concept List App</h1>
                    <p>Use the list below to toggle concepts that you do or do not understand. Note, this will update when you refresh the page.</p>
                </div>
            </div>
        );
    }
}
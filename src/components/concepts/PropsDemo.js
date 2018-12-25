import React from 'react';

export default class PropsDemo extends React.Component {
    constructor(){
        super();
        this.state ={
            color: 'white',
            backgroundColor: 'blue',
            borderRadius: '5px',
            borderStyle: 'dashed',
            display: 'inline-block',
            width: '300px',
            textAlign: 'center'
        }
    }

    colorToggle = () => {
        this.setState({
            color: this.state.color === 'white' ? 'red' : 'white'
        })
    }

    render() {
        return (
            <div className='main'>
                <div className='mainDiv'>
                    <div style={this.state}>
                        <FunctionalComp string="will this display?"/>
                        <FunctionalComp string='Star Wars over Star Trek'/>
                        <FunctionalComp string='Programming blah blah blah'/>
                        <FunctionalComp string='Dune is the greatest Sci-fi movie'/>
                    </div>
                </div>
            </div>
        )
    }
}

const FunctionalComp = (props) => {
    return(
        <div>
            <p>{props.string}</p>
            <button onClick={props.function}>Press Me!</button>
        </div>
    )
}
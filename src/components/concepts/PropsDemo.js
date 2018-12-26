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

    backgroundColorToggle = () => {
        this.setState({
            backgroundColor: this.state.backgroundColor === 'blue' ? 'green' : 'blue'
        })
    }

    borderRadiusToggle = () => {
        this.setState({
            borderRadius: this.state.borderRadius === '5px' ? '25px' : '5px'
        })
    }

    borderStyleToggle = () => {
        this.setState({
            borderStyle: this.state.borderStyle === 'dashed' ? 'solid' : 'dashed'
        })
    }

    render() {
        return (
            <div className='main'>
                <div className='mainDiv'>
                    <div style={this.state}>
                        <FunctionalComp string='Color Toggle' function={this.colorToggle}/>
                        <FunctionalComp string='Background Color Toggle' function={this.backgroundColorToggle}/>
                        <FunctionalComp string='Border Radius Toggle' function={this.borderRadiusToggle}/>
                        <FunctionalComp string='Border Style Toggle' function={this.borderStyleToggle}/>
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
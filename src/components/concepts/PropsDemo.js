import React from 'react';

export default class PropsDemo extends React.Component {
    render() {
        return (
            <div>
                <FunctionalComp string="will this display?"/>
            </div>
        )
    }
}

const FunctionalComp = (props) => {
    return(
        <div>
            <p>{props.string}</p>
        </div>
    )
}
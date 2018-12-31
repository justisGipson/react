import React from 'react';

const Concept = ({concept, toggle}) => {
    const done = (event) => {
        event.preventDefault();
        toggle(concept);
        console.log('Props: ', concept, toggle);
    }
    console.log('concept:', concept);
    return (
        <li>
    {concept.done ? (<del>{concept.text}</del>) : (concept.text)} <button href="" onClick={done}>✓</button>
        </li>
    );
}

export default Concept;
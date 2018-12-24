import React from 'react';


const JSXRules = () => {
    return (
        <div className='main'>
            <div className='mainDiv'>
                <h1 className='section-title'>JSX</h1>
                <dl>
                    <dt>Resembles HTML</dt>
                    <dd>It's not. It is actually closer to JavaScript.</dd>
                    <dt>'React Elements'</dt>
                    <dd>These are used to construct and update the DOM, or what you see on the screen.</dd>
                    <dt>JSX is not required</dt>
                    <dd>You can write your return in vanilla JS, most most sane people will use JSX.</dd>
                </dl>
            </div>
        </div>
    );
};

export default JSXRules;
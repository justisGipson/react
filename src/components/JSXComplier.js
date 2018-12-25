// Source: https://jsbin.com/qonga/edit?js,output

import React from 'react';

class JSXCompiler extends React.Component {
    constructor(){
        super();
        this.state ={
            input: '/* add your JSX here */',
            output: '/',
            err: ''
        }
    }
    update(e) {
        let code = e.target.value;
        try {
            this.setState({
                output:window.Babel
                    .transform(code, { presets: ['es2015', 'react'] })
                    .code,
                err: ''
            })
        }
        catch (err) {
            this.setState({ err: err.message })
        }
    }
    render() {
        return (
            <div>
                <header className='compiler-header'>{this.state.err}</header>
                <div className='compiler-container'>
                    <pre>{this.state.ouput}</pre>
                    <textarea
                        onChange={this.update.bind(this)}
                        defaultValue={this.state.input} />
                </div>
            </div>
        )
    }
}
export default JSXCompiler;
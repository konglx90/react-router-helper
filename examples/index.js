import React, { Component } from 'react';
import { render } from 'react-dom';
import RouteConfigExample from './router';

class Main extends Component {
    render() {
        return (
            <div>
                <h1>react router demo</h1>
                <RouteConfigExample />
            </div>
        )
    }
}
render(
    <Main />,
    document.getElementById('app')
)

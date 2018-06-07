import React, { Component } from 'react';
import { render } from 'react-dom';
import RouteConfigExample from './RouterDemo';
import { goDetail } from './router';

class Main extends Component {
    render() {
        return (
            <div>
                <h1 onClick={() => goDetail(90)}>react router demo</h1>
                <RouteConfigExample />
            </div>
        )
    }
}
render(
    <Main />,
    document.getElementById('app')
)

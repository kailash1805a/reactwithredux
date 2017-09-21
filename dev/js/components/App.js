import React, { Component } from 'react';
import Header from './Header/HeaderPage';
import PoliticianList from '../containers/PoliticianList';
import PoliticianActive from '../containers/PoliticianActive';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <p>List</p>
                <PoliticianList />
                <p>Details</p>
                <PoliticianActive />
            </div>
        );
    }
}

export default App;
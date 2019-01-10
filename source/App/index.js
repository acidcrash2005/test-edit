//Core
import React, {Component} from 'react';

//Components
import { TextC } from '../components';

//Styles
import './style.scss';

export default class App extends Component {
    render() {
        return (
            <div className = 'main-app'>
                <TextC />
            </div>
        );
    }
}

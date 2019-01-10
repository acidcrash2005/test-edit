//Core
import React, {Component} from 'react';

//Components
import {Settings} from '../';

//Styles
import './style.scss';

export default class Header extends Component {
    render() {
        return (
            <header className = 'text-block__header'>
                Text block
                <Settings />
            </header>
        );
    }
}

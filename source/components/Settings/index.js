import React, {Component} from 'react';
import cx from 'classnames';

//Styles
import './style.scss';

export default class Settings extends Component {
    static defaultProps = {
        horizontal: false,
    };

    render() {
        const {horizontal} = this.props;
        const settingsStyle = cx('settings-components', {'i-vertical': horizontal});

        return (
            <div className = { settingsStyle }>
                <div className = 'settings-components__wrapper'>
                    <i/>
                    <i/>
                    <i/>
                </div>
            </div>
        );
    }
}

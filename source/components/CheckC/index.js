//Core
import React, {Component} from 'react';
import cx from 'classnames';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//Components
import {Settings} from '../';

//Styles
import './style.scss';

//Actions
import {setEditingState} from '../../bus/ui/actions';

const mapDispatch = (dispatch) => {
    return {
        actions: bindActionCreators({
            setEditingState,
        }, dispatch),
    };
};

export default
@connect(null, mapDispatch)
class CheckC extends Component {
    _changeHandle = () => {
        const {actions, isChecked, id} = this.props;

        const payload = {
            id,
            state: !isChecked,
        };

        actions.setEditingState(payload);
    }

    render() {
        const {label, settings, isChecked} = this.props;

        //CX
        const cxCheckC = cx('component-CheckC__input', {'i-checked': isChecked});

        return (
            <div className = 'component-CheckC'>
                {label ? label : 'Label'}

                <div className = 'component-CheckC__controls'>
                    {settings && <Settings horizontal />}

                    <label className = { cxCheckC }>
                        <input
                            checked = { isChecked }
                            type = 'checkbox'
                            onChange = { this._changeHandle }
                        />
                    </label>
                </div>
            </div>
        );
    }
}

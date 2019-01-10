import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import cx from 'classnames';

//Component
import {Edit} from '../';

//Styles
import './style.scss';

//Actions
import {setEditing} from '../../bus/ui/actions';

//MapState
const mapState = (state) => {
    return {
        isEditing: state.ui.isEditing,
    };
};

const mapDispatch = (dispatch) => {
    return {
        actions: bindActionCreators({
            setEditing,
        }, dispatch),
    };
};

export default
@connect(mapState, mapDispatch)
class TextC extends Component {
    _setEdit = () =>{
        const {isEditing, actions} = this.props;

        actions.setEditing(!isEditing);
    }

    render() {
        const {isEditing} = this.props;
        const cxText = cx('text', {'i-editing': isEditing});

        return (
            <div
                className = { cxText }>
                {isEditing && <Edit />}

                <div
                    className = 'text-container'
                    onClick = { this._setEdit }>
                    <div className = 'text-1'>
                        Bbq Myths Getting You Down
                    </div>
                    <div className = 'text-2'>
                        Medical Care Is Just A Click Away
                    </div>
                    <div className = 'text-3'>
                        Business cards represent not only your business,
                        but it also tells people your professionalism in
                        the industry. In the business world today,
                        the usage of business cards is far beyond just informing people who you are,
                    </div>
                    <div className = 'text-4'>
                        Business cards represent not only your business,
                        but it also tells people your professionalism in
                        the industry. In the business world today,
                        the usage of business cards is far beyond just informing people who you are,
                    </div>
                </div>
            </div>
        );
    }
}

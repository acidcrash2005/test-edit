import React, {Component} from 'react';
import {CheckC, Header} from '../';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//Styles
import './style.scss';

//API
import {apiState} from '../../API';

//Actions
import {initEditState} from '../../bus/ui/actions';

//MapState
const mapState = (state) => {
    return {
        editState: state.ui.editState,
    };
};

const mapDispatch = (dispatch) => {
    return {
        actions: bindActionCreators({
            initEditState,
        }, dispatch),
    };
};

export default
@connect(mapState, mapDispatch)
class Edit extends Component {
    componentDidMount() {
        const {actions} = this.props;
        actions.initEditState(apiState);
    }

    render() {
        const {editState} = this.props;

        return (
            <section className = 'text-block__container'>
                <div className = 'text-block__container-edit'>
                    <Header />

                    <div className = 'components-container'>
                        <div className = 'components-container__title'>Components</div>
                        <div className = 'components-container__items'>
                            {
                                editState.map((component, index) => (
                                    <CheckC
                                        id = { component.id }
                                        isChecked = { component.state }
                                        key = { `CheckC-${index}-${component.id}` }
                                        label = { component.label }
                                        settings = { component.settings }
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}


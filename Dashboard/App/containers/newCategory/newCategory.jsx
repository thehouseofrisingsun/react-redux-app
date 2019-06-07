import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addCategory, changeName } from './newCategoryActions.jsx'

class NewCategory extends React.Component {

    render() {
        return (
            <div>
                <h3>New Category</h3>
                <div >
                    <div className="row">
                        Name:
                        <input type="input"  value={this.props.data.name} onChange={(e) => this.props.changeName(e.target.value)} /></div>
                    <div className="row actionBlock">
                        <input type="button" value="Save" onClick={() => this.props.addCategory(this.props.data.name)} />
                    </div>
                </div>
            </div>
        );
    }
};

let mapProps = (state) => {
    return {
        data: state.category
    }
}

let mapDispatch = (dispatch) => {
    return {
        addPost: bindActionCreators(addCategory, dispatch),
        changeName: bindActionCreators(changeName, dispatch),
    }
}

export default connect(mapProps, mapDispatch)(NewCategory)

import React from 'react'
import { Link } from 'react-router-dom';


export default class NavLink extends React.Component {
    render() {
        return (
            <div className={"nav-item " + (this.props.isActive ? "active" : "")} >
                <Link className="nav-link" to={this.props.path}>{this.props.text}</Link>
            </div>
        );
    }
}
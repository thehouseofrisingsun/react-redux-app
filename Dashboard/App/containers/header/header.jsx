import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import  NavLink  from '../../components/navlink.jsx'

class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">Admin app</a>
                <NavLink path="/category" text="Categories" />
                <NavLink path="/venues" text="Venues" />
                <NavLink path="/events" text="Events" />
                <NavLink path="/venuesPage" text="Venue Pagination" />
            </nav>

        );
    }
};

export default Header
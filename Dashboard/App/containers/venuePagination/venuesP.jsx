import React from "react";
import { connect } from "react-redux";
import * as venueActions from "./venueActionsP.jsx";
import * as cityActions from "../city/cityActions.jsx";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import queryString from 'query-string';
import VenueList from "../venue/venueList.jsx";
import { Redirect } from "react-router-dom";
import Spinner from "../../components/common/spinner.jsx";
import { Link } from 'react-router-dom'

class VenuePagePagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: location.search
        }
    }
    state = {
        redirectToAddVenuePage: false
    };

    componentDidMount() {
        const { venues, cities, actions } = this.props;
        let pageIndex;
        const parsed = queryString.parse(location.search);
        if (parsed) {
            pageIndex = parsed['pageIndex'];
        }
        if (!venues.records) {
            actions.loadVenues(pageIndex);
        }
        if (cities.length === 0) {
            actions.loadCities();
        }
    }
    componentWillReceiveProps() {
        if (this.state.query != location.search) {
            this.setState({ query: location.search });
            actions.loadVenues();
        }
    }
    handleDeleteVenue = async venue => {
        try {
            await this.props.actions.deleteVenue(venue);
        } catch (error) {
        }
    };

    render() {
        let pageIndex = 0;
        const parsed = queryString.parse(location.search);
        if (parsed) {
            pageIndex = parsed['pageIndex'];
        }
        if (!pageIndex) pageIndex = 0;
        const total = this.props.venues.totalPages;
        const pageSize = this.props.venues.pageSize;
        const pageNumbers = [];
        let queryTrailer = '';
        for (let i = 1; i <= Math.ceil(total / pageSize); i++) {
            pageNumbers.push(i);
        }
        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <div className="paging" key={number}>
                    <Link className={pageIndex == (number - 1) ? "active-page" : ""} to={"/venuesPage?pageIndex=" + (number - 1) + queryTrailer}>{number}</Link>
                </div>
            );
        });
        return (<div>
            {this.state.redirectToAddVenuePage && <Redirect to="/venue" />}
            <h2>Venues</h2>
            {this.props.loading ? (
                <Spinner />
            ) : (
                    <div>
                        <button
                            style={{ marginBottom: 20 }}
                            className="btn btn-primary add-course"
                            onClick={() => this.setState({ redirectToAddVenuePage: true })}
                        >
                            Add venue
                            </button>

                        <VenueList
                            onDeleteClick={this.handleDeleteVenue}
                            venues={this.props.venues.records}
                        />
                        {renderPageNumbers}
                    </div>
                )}
        </div>
        );
    }
}

VenuePagePagination.propTypes = {
    cities: PropTypes.array.isRequired,
    venues: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
    return {
        venues: (state.cities.length === 0) ? {} : state.venuesP,
        cities: state.cities,
        loading: state.apiCallsInProgress > 0
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            loadVenues: bindActionCreators(venueActions.loadVenues, dispatch),
            loadCities: bindActionCreators(cityActions.loadCities, dispatch),
            deleteVenue: bindActionCreators(venueActions.deleteVenue, dispatch)
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VenuePagePagination);

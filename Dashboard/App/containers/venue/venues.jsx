import React from "react";
import { connect } from "react-redux";
import * as venueActions from "../venue/venueActions.jsx";
import * as cityActions from "../city/cityActions.jsx";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import VenueList from "../venue/venueList.jsx";
import { Redirect } from "react-router-dom";
import Spinner from "../../components/common/spinner.jsx";

class VenuePage extends React.Component {
    state = {
        redirectToAddVenuePage: false
    };

    componentDidMount() {
        const { venues, cities, actions } = this.props;
        if (venues.length === 0) {
            actions.loadVenues();
        }
        if (cities.length === 0) {
            actions.loadCities();
        }
    }

    handleDeleteVenue = async venue => {
        try {
            await this.props.actions.deleteVenue(venue);
        } catch (error) {
        }
    };

    render() {
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
                                venues={this.props.venues}
                            />
                        </div>
                    )}
            </div>
        );
    }
}

VenuePage.propTypes = {
    cities: PropTypes.array.isRequired,
    venues: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
    return {
        venues:
            (state.cities.length === 0)
                ? []
                : state.venues.map(venue => {
                    return {
                        ...venue,
                        cityName: state.cities.find(c => c.id === venue.cityId).name
                    };
                }),
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
)(VenuePage);

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadVenues, saveVenue } from "../venue/venueActions.jsx";
import { loadCities } from "../city/cityActions.jsx";
import PropTypes from "prop-types";
import VenueForm from "./venueForm.jsx";
import Spinner from "../../components/common/spinner.jsx";

const newVenue = {
    name: '',
    cityId: 0,
    description: ''
};

export function ManageVenuePage({
    venues,
    cities,
    loadCities,
    loadVenues,
    saveVenue,
    history,
    ...props
}) {
    const [venue, setVenue] = useState({ ...props.venue });
    const [errors, setErrors] = useState({});
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        if (venues.length === 0) {
            loadVenues();

        } else {
            setVenue({ ...props.venue });
        }

        if (cities.length === 0) {
            loadCities();
        }
    }, [props.venue]);

    function handleChange(event) {
        const { name, value } = event.target;
        setVenue(prevVenue => ({
            ...prevVenue,
            [name]: (name === "cityId" ? parseInt(value, 10) : value),
        }));
    }

    function handleSave(event) {
        event.preventDefault();
        if (!formIsValid()) return;
        setSaving(true);
        saveVenue(venue)
            .then(() => {
                console.log('fdsfd');
                history.push("/venues");
            })
            .catch(error => {
                setSaving(false);
                setErrors({ onSave: error.message });
            });
    }

    function formIsValid() {
        const { name, description, cityId } = venue;
        const errors = {};

        if (!name) errors.title = "Name is required";
        if (!cityId) errors.city = "City is required";
        if (!description) errors.description = "Description is required";
        setErrors(errors);
        return Object.keys(errors).length === 0;
    }

    return (cities.length === 0 || venues.length === 0) ? (
        <Spinner />
    ) : (
            <VenueForm
                venue={venue}
                errors={errors}
                cities={cities}
                onChange={handleChange}
                onSave={handleSave}
                saving={saving}
            />
        );
}

ManageVenuePage.propTypes = {
    venue: PropTypes.object.isRequired,
    cities: PropTypes.array.isRequired,
    venues: PropTypes.array.isRequired,
    loadVenues: PropTypes.func.isRequired,
    loadCities: PropTypes.func.isRequired,
    saveVenue: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
};

export function getVenueById(venues, id) {
    return venues.find(venue => venue.id == id) || 0;
}

function mapStateToProps(state, ownProps) {
    const id = ownProps.match.params.id;
    const venue =
        id && state.venues.length > 0
            ? getVenueById(state.venues, id)
            : newVenue;
    return {
        venue,
        venues: state.venues,
        cities: state.cities
    };
}

const mapDispatchToProps = {
    loadCities,
    loadVenues,
    saveVenue
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ManageVenuePage);

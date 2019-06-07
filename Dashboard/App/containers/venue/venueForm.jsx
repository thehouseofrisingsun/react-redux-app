import React from "react";
import PropTypes from "prop-types";
import TextInput from "../../components/common/textInput.jsx";
import SelectInput from "../../components/common/selectInput.jsx";


const VenueForm = ({
    venue,
    cities,
    onSave,
    onChange,
    saving = false,
    errors = {}
}) => {
    return (
        <form onSubmit={onSave}>
            <h2>{venue.id ? "Edit" : "Add"} Venue</h2>
            {errors.onSave && (
                <div className="alert alert-danger" role="alert">
                    {errors.onSave}
                </div>
            )}
            <TextInput
                name="name"
                label="Name"
                value={venue.name}
                onChange={onChange}
                error={errors.name}
            />
            <TextInput
                name="description"
                label="Description"
                value={venue.description}
                onChange={onChange}
                error={errors.description}
            />
            <SelectInput
                name="cityId"
                label="City"
                value={venue.cityId}
                defaultOption="Select City"
                options={cities.map(city => ({
                    value: city.id,
                    text: city.name
                }))}
                onChange={onChange}
                error={errors.city}
            />

            <button type="submit" disabled={saving} className="btn btn-primary">
                {saving ? "Saving..." : "Save"}
            </button>
        </form>
    );
};

VenueForm.propTypes = {
    cities: PropTypes.array.isRequired,
    venue: PropTypes.object.isRequired,
    errors: PropTypes.object,
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    saving: PropTypes.bool
};

export default VenueForm;

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const VenueList = ({ venues, onDeleteClick }) => (
    <table className="table">
        <thead>
            <tr>
                <th />
                <th>Name</th>
                <th>Description</th>
                <th>City</th>
                <th>Action</th>
                <th />
            </tr>
        </thead>
        <tbody>
            {(!venues ||  venues.length === 0 )? [] : venues.map(venue => {
                return (
                    <tr key={venue.id}>
                        <td>
                        </td>
                        <td>
                            <Link to={"/venue/" + venue.id}>{venue.name}</Link>
                        </td>
                        <td>{venue.description}</td>
                        <td>{venue.cityName}</td>
                        <td>
                            <button
                                className="btn btn-outline-danger"
                                onClick={() => onDeleteClick(venue)}
                            >
                                Delete
              </button>
                        </td>
                    </tr>
                );
            })}
        </tbody>
    </table>
);

VenueList.propTypes = {
 //   venues: PropTypes.array.isRequired,
    onDeleteClick: PropTypes.func.isRequired
};

export default VenueList;

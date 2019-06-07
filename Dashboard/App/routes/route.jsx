import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, Redirect } from 'react-router-dom';
import NewCategory from '../containers/newCategory/newCategory.jsx';
import CategoryList from '../containers/category/categories.jsx'
import VenuePage from '../containers/venue/venues.jsx'
import EventList from '../containers/event/events.jsx'
import Dashboard from '../containers/dashboard/dashboard.jsx'
import ManageVenuePage from '../containers/venue/venueManage.jsx';
import VenuePagePagination from '../containers/venuePagination/venuesP.jsx'


export default class Routing extends React.Component {

    render() {

        return (
            <div className="main-content">
                <Switch>
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/category/new" component={NewCategory} />
                    <Route path="/category" component={CategoryList} />
                    <Route path="/venues" component={VenuePage} />
                    <Route path="/venuesPage" component={VenuePagePagination} />
                    <Route path="/events" component={EventList} />
                    <Route path="/venue/:id" component={ManageVenuePage} />
                    <Route path="/venue" component={ManageVenuePage} />
                    <Route exact path="/" render={() => (<Redirect to="/dashboard" />)} />
                </Switch>
            </div>
        );
    }
};

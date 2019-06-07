import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Button from 'react-bootstrap/Button';

export default class Category extends React.Component {

    render() {
        let deleteBlock = <Button variant="danger" onClick={() => {
            if (confirm('Are you sure you want to delete category?')) {
                this.props.deleteCategory(this.props.data.id);
            }
        }}>Delete</Button>;

        let editBlock = <Link to={"/editCategory/categoryId=" + this.props.data.id}><Button >Edit</Button></Link>;

        return (
            <MDBRow >
                <MDBCol>{this.props.data.id}</MDBCol>
                <MDBCol>{this.props.data.name}</MDBCol>
                <MDBCol>{this.props.data.parentCategoryName}</MDBCol>
                <MDBCol>
                    {deleteBlock}
                    {editBlock}
                </MDBCol>
            </MDBRow>
        );
    }
};
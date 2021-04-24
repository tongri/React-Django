import React, { Fragment, useState } from "react";
import { MDBTable, MDBTableBody, MDBTableHead, MDBDataTable } from 'mdbreact';
import {isAuth} from '../../hoc/isAuth';
import "react-table/react-table.css";

class TopicTable extends React.Component {
    render() {
        console.log("props", this.props);
        const elems = this.props.topics.map((item) => {
            const {id, subject, views, starter, last_updated} = item;
            return (
                <tr key={id}>
                    <th>{subject}</th>
                    <th>{starter}</th>
                    <th>{last_updated}</th>
                    <th>{views}</th>
                </tr>
            )
        })
        return (
            <MDBTable>
        <MDBTableHead>
            <tr>
            <th>Subject</th>
            <th>Created By</th>
            <th>Last Updated</th>
            <th>Views</th>
            </tr>
        </MDBTableHead>
        <MDBTableBody>
            {elems}
        </MDBTableBody>
        </MDBTable>
        );
    }
}

export default isAuth(TopicTable);

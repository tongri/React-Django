import React, { Fragment } from "react";
import { MDBTable, MDBTableBody, MDBTableHead, MDBDataTable } from 'mdbreact';
import {isAuth} from '../../../hoc/isAuth';
import "react-table/react-table.css";

class BoardTable extends React.Component {
    render() {
        console.log("props", this.props);
        const elems = this.props.boards.map((item) => {
            const {id, name, topics, posts} = item;
            return (
                <tr key={id}>
                    <th><a href={`topics/${id}`} >{name}</a></th>
                    <th>{topics}</th>
                    <th>{posts}</th>
                    { this.props.user ? <div>
                            <th>hi</th>
                            <th>hi</th>
                        </div> : null }
                </tr>
            )
        })
        return (
            <Fragment>
                <MDBTable>
            <MDBTableHead>
                <tr>
                <th>Name</th>
                <th>Topics</th>
                <th>Posts</th>
                </tr>
            </MDBTableHead>
            <MDBTableBody>
                {elems}
            </MDBTableBody>
            </MDBTable>
        </Fragment>
        );
    }
}

export default isAuth(BoardTable);

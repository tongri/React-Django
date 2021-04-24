import React from 'react';
import TaskTable from "../../../components/Boards/BoardTable";
import { setBoard } from "../../../actions/index";
import { getBoard } from "../../../api/queries";
import { PAGINATION } from '../../../constants';

class Boards extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            pages: 1,
            board: {
                topics: 0,
                posts: 0,
                name: "",
                description: ""
            },
            id: ""
        }
    }

    componentDidMount() {
        getBoard(1).then((response) => {
            this.props.dispatch(setBoard(response.data.results));
            this.setState({
                pages: Math.ceil(response.data.count / PAGINATION)
            })
        })
    }
}
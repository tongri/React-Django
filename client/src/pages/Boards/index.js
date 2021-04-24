import React, {useState, useEffect, Fragment} from 'react';
import BoardTable from "../../components/Boards/BoardTable";
import { connect } from 'react-redux';
import { setBoard } from "../../actions/index";
import { getBoards } from "../../api/queries";
import { PAGINATION } from '../../constants';
import Modal from '../../components/MyModals';


const Boards = (props)  => {
    const [page, setPage] = useState(0);
    useEffect(() => {
        getBoards(1).then((response) => {
                props.dispatch(setBoard(response.results));
                setPage(
                     Math.ceil(response.count / PAGINATION)
                );
            })
    }, []);
    return (
        <Fragment>
            <Modal>
                hi
            </Modal>
    <BoardTable 
        boards={props.boards.data}
        />
    </Fragment>
    )
}

function mapStateToProps(state) {
    return {
      boards: state.boards
    };
}

export default connect(mapStateToProps)(Boards);

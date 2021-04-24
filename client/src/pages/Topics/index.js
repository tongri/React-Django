import React, {useState, useEffect} from 'react';
import TopicTable from "../../components/Topics";
import { connect } from 'react-redux';
import { setTopic } from "../../actions/index";
import { getTopics } from "../../api/queries";
import { PAGINATION } from '../../constants';


const Topics = (props)  => {
    let { match: { params: {id} } } = props
    const [page, setPage] = useState(0);
    useEffect(() => {
        getTopics(id).then((response) => {
                props.dispatch(setTopic(response.results));
                console.log(response.results);
                setPage(
                    Math.ceil(response.count / PAGINATION)
                );
            })
    }, []);
    console.log("topeeeecs", props);
    return (
        <TopicTable topics={props.topics.data} />
    )
}

function mapStateToProps(state) {
    return {
      topics: state.topics
    };
}

export default connect(mapStateToProps)(Topics);

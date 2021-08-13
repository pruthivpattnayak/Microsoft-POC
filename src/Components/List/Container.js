import { connect } from "react-redux";
import List from "./Presentation";
// import actions from "../../Action";
import { incrFunc, decrFunc, resetFunc } from "../../ActionCreator";

const asyncInc = () => {
    return (dispatch, store) => {
        fetch("/")
            .then((res) => res.json())
            .then(() => {
                dispatch(incrFunc());
            });
    };
};
const mapStateToProps = (state) => {
    console.log("state in container", state);
    const { count } = state.listsec;
    console.log("count", count);
    return { count };
};

const mapDispatchToProps = (dispatch) => {
    return {
        inc: () => dispatch(incrFunc()),
        dec: () => dispatch(decrFunc()),
        reset: () => dispatch(resetFunc()),
        asyncInc: () => dispatch(asyncInc()),
    };
};

const ListComponent = connect(mapStateToProps, mapDispatchToProps)(List);

export default ListComponent;

// HOC

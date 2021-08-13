import actions from "./Action";

const initState = {
    list: [6, 7, 8, 9],
    display: "Hi",
    count: 5,
};

const reducer = (state = initState, action) => {
    console.log("action", action);
    switch (action.type) {
        case actions.INC:
            return { ...state, count: state.count + 1 };
        // const returnVal = Object.assign({}, state, {
        //     count: state.count + 1,
        // });
        // return returnVal;

        case actions.DEC:
            const newVal = state.count - 1;
            return { ...state, count: newVal < 0 ? 0 : newVal };

        case actions.RESET:
            return { ...state, count: 0 };

        default:
            return state;
    }
};

export default reducer;

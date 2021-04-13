import { createStore } from "redux";

const initialState = {
    globalSearchValue: "",
};

const store = createStore(reduxReducer);

function reduxReducer(state = initialState, action) {
    switch (action.type) {
        case "globalSearchValueChange":
            return { ...state, globalSearchValue: action.payload };
        default:
            return state;
    }
}

export default store;

import React, { useReducer } from "react";
import "./App.css";

import Header from "./Components/Header/Header";
import TaskListModule from "./Components/Task/TaskListModule";

export const AppContext = React.createContext();
const initialState = {
    searchValue: "",
};

function reducer(state, action) {
    switch (action.type) {
        case "UPDATE_INPUT":
            return {
                searchValue: action.data,
            };

        default:
            return initialState;
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <AppContext.Provider value={{ state, dispatch }}>
                <Header />
                <TaskListModule />
            </AppContext.Provider>
        </>
    );
}

export default App;

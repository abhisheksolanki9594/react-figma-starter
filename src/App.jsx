import React from "react";
import { Provider } from "react-redux";
import "./App.css";

import Header from "./Components/Header/Header";
import TaskListModule from "./Components/Task/TaskListModule";
import store from "./Redux/Store";

// export const AppContext = React.createContext();
// const initialState = {
//     searchValue: "",
// };

// function reducer(state, action) {
//     switch (action.type) {
//         case "UPDATE_INPUT":
//             return {
//                 searchValue: action.data,
//             };

//         default:
//             return initialState;
//     }
// }

function App() {
    // const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            {/* <AppContext.Provider value={{ state, dispatch }}> */}
            <Provider store={store}>
                <Header />
                <TaskListModule />
            </Provider>
            {/* </AppContext.Provider> */}
        </>
    );
}

export default App;

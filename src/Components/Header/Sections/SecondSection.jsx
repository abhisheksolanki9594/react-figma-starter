import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { IconButton, SearchIcon, AddIcon, HistoryIcon, InputBase } from "../../Commons/Material/MaterialComponents";
import { SearchBox, SearchIconStyle, SearchInput } from "../Header.style";
// import { AppContext } from "../../../App";

export default function SecondSection() {
    /* using useContext hook START */
    // const { dispatch } = useContext(AppContext);
    // const [searchValue, setSearchValue] = React.useState("");
    /* using useContext hook END */

    /* using redux store START */
    const searchValue = useSelector((state) => state.globalSearchValue);
    const searchValueDispatch = useDispatch();
    /* using redux store END */

    const searchValueChange = (event) => {
        /* using useContext hook START */
        // setSearchValue(event.target.value);
        // dispatch({ type: "UPDATE_INPUT", data: event.target.value });
        /* using useContext hook END */

        /* using redux store START */
        searchValueDispatch({ type: "globalSearchValueChange", payload: event.target.value });
        /* using redux store END */
    };

    return (
        <div className='second-section'>
            <IconButton color='inherit'>
                <AddIcon />
            </IconButton>

            <SearchBox>
                <div>
                    <SearchIconStyle>
                        <SearchIcon />
                    </SearchIconStyle>

                    <SearchInput>
                        <InputBase className='search-input' placeholder='Search…' value={searchValue} onChange={(e) => searchValueChange(e)} />
                    </SearchInput>
                </div>
            </SearchBox>

            <IconButton color='inherit'>
                <HistoryIcon />
            </IconButton>
        </div>
    );
}

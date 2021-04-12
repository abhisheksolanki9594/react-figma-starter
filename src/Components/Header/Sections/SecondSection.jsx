import React, { useContext } from "react";
import { IconButton, SearchIcon, AddIcon, HistoryIcon, InputBase } from "../../Commons/Material/MaterialComponents";
import { SearchBox, SearchIconStyle, SearchInput } from "../Header.style";
import { AppContext } from "../../../App";

export default function SecondSection() {
    const { dispatch } = useContext(AppContext);

    const [searchValue, setSearchValue] = React.useState("");

    const searchValueChange = (event) => {
        setSearchValue(event.target.value);

        dispatch({ type: "UPDATE_INPUT", data: event.target.value });
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

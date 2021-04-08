import React, { useContext } from "react";
import styled from "styled-components";

import { IconButton, SearchIcon, AddIcon, HistoryIcon, InputBase } from "../../Shared/MaterialComponents";
import { AppContext } from "../../App";

const SearchBox = styled.div`
    width: auto;
    position: relative;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.15) !important;
    margin-right: 16px;
    margin-left: 0;
`;

const SearchIconStyle = styled.div`
    height: 100%;
    display: flex;
    padding: 0px 16px;
    position: absolute;
    align-items: center;
    pointer-events: none;
    justify-content: center;
`;

const SearchInput = styled.div`
    color: #ffffff;
    padding: 8px 8px 8px 0px;
    padding-left: calc(1em + 32px);

    .search-input {
        color: #ffffff;
    }
`;

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

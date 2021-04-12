import styled from "styled-components";

export const HeaderBar = styled.div`
    .header-toolbar {
        font-size: 1em;
        text-align: left;
        color: #ffffff;
        background-color: #1976d2;
        justify-content: space-between;
    }

    .first-section {
        font-size: 1em;
        text-align: left;
        color: #ffffff;
        background-color: #1976d2;
        justify-content: space-between;
    }

    .second-section,
    .third-section {
        display: flex;
        justify-content: space-between;
    }
`;

export const SearchBox = styled.div`
    width: auto;
    position: relative;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.15) !important;
    margin-right: 16px;
    margin-left: 0;
`;

export const SearchIconStyle = styled.div`
    height: 100%;
    display: flex;
    padding: 0px 16px;
    position: absolute;
    align-items: center;
    pointer-events: none;
    justify-content: center;
`;

export const SearchInput = styled.div`
    color: #ffffff;
    padding: 8px 8px 8px 0px;
    padding-left: calc(1em + 32px);

    .search-input {
        color: #ffffff;
    }
`;

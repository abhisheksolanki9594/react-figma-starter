import React from "react";
import styled from "styled-components";

import {
    AppBar,
    Toolbar,
    Badge,
    IconButton,
    MenuIcon,
    SearchIcon,
    AddIcon,
    HistoryIcon,
    ForumIcon,
    NotificationsIcon,
    SettingsIcon,
    AccountCircleIcon,
    InputBase,
} from "../Shared/MaterialComponents";

const HeaderBar = styled.div`
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
`;

function FirstSection() {
    return (
        <div className='first-section'>
            <IconButton color='inherit'>
                <MenuIcon />
            </IconButton>

            <label className='task-list-label'>TASK LIST</label>
        </div>
    );
}

function SecondSection() {
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
                        <InputBase placeholder='Search…' inputProps={{ "aria-label": "search" }} />
                    </SearchInput>
                </div>
            </SearchBox>

            <IconButton color='inherit'>
                <HistoryIcon />
            </IconButton>
        </div>
    );
}

function ThirdSection() {
    return (
        <div className='third-section'>
            <IconButton color='inherit'>
                <ForumIcon />
            </IconButton>

            <IconButton color='inherit'>
                <Badge badgeContent={3} color='secondary'>
                    <NotificationsIcon />
                </Badge>
            </IconButton>

            <IconButton color='inherit'>
                <SettingsIcon />
            </IconButton>

            <IconButton color='inherit'>
                <AccountCircleIcon />
            </IconButton>
        </div>
    );
}

export default function Header() {
    return (
        <AppBar position='static'>
            <HeaderBar>
                <Toolbar className='header-toolbar'>
                    <FirstSection />
                    <SecondSection />
                    <ThirdSection />
                </Toolbar>
            </HeaderBar>
        </AppBar>
    );
}

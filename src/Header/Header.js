import React from "react";
import styled from "styled-components";

import FirstSection from "./Sections/FirstSection";
import SecondSection from "./Sections/SecondSection";
import ThirdSection from "./Sections/ThirdSection";

import { AppBar, Toolbar } from "../Shared/MaterialComponents";

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

export default function Header(props) {
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

import React from "react";

import FirstSection from "./Sections/FirstSection";
import SecondSection from "./Sections/SecondSection";
import ThirdSection from "./Sections/ThirdSection";

import { AppBar, Toolbar } from "../Commons/Material/MaterialComponents";
import { HeaderBar } from "./Header.style";

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

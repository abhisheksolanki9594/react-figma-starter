import React from "react";
import styled from "styled-components";

import { Box, Tab, Tabs, Typography } from "../Shared/MaterialComponents";
import AllTabModule from "./AllTaskTab/AllTaskTabModule";

const TabContent = styled.section`
    padding: 0px 25ch 0px 25ch;
`;

function ActiveTabData(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role='tabpanel'
            hidden={value !== index}
            id={`simple-activetabdata-${index}`}
            aria-labelledby={`simple-activetabdata-${index}`}
            {...other}
        >
            {value === index && (
                <TabContent>
                    <Box>
                        <Typography>{children}</Typography>
                    </Box>
                </TabContent>
            )}
        </div>
    );
}

function CompletedTabData(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role='tabpanel'
            hidden={value !== index}
            id={`simple-completedtabdata-${index}`}
            aria-labelledby={`simple-completedtabdata-${index}`}
            {...other}
        >
            {value === index && (
                <TabContent>
                    <Box>
                        <Typography>{children}</Typography>
                    </Box>
                </TabContent>
            )}
        </div>
    );
}

export default function TaskTabData() {
    const [selectedTab, setSelectedTabValue] = React.useState(0);

    const tabChange = (event, newValue) => {
        setSelectedTabValue(newValue);
    };

    return (
        <div>
            <Tabs className='tabs-list' value={selectedTab} onChange={tabChange}>
                <Tab label='All' />
                <Tab label='Active' />
                <Tab label='Completed' />
            </Tabs>
            <AllTabModule value={selectedTab} index={0}>
                All
            </AllTabModule>
            <ActiveTabData value={selectedTab} index={1}>
                Active
            </ActiveTabData>
            <CompletedTabData value={selectedTab} index={2}>
                Completed
            </CompletedTabData>
        </div>
    );
}

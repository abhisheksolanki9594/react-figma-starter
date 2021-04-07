import React from "react";

import { Box, Tab, Tabs, Typography, AccountCircleIcon, Avatar } from "../Shared/MaterialComponents";
import { CardDetails, TabContent, TaskDetails } from "./TaskCSS";
import AllTabData from "./AllTaskTabData";

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

function TabData() {
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
            <AllTabData value={selectedTab} index={0}>
                All
            </AllTabData>
            <ActiveTabData value={selectedTab} index={1}>
                Active
            </ActiveTabData>
            <CompletedTabData value={selectedTab} index={2}>
                Completed
            </CompletedTabData>
        </div>
    );
}

function TaskTitle() {
    return (
        <TaskDetails>
            <div>
                <div className='task-title'>
                    <Avatar className='avatar'>
                        <AccountCircleIcon />
                    </Avatar>

                    <Typography variant='h6'>
                        <strong>My Task</strong>
                    </Typography>
                </div>
                <div className='task-description'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived
                    not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                    1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                    Aldus PageMaker including versions of Lorem Ipsum.
                </div>
            </div>
        </TaskDetails>
    );
}

export default function TaskListModule() {
    return (
        <CardDetails>
            <div>
                <TaskTitle />
                <TabData />
            </div>
        </CardDetails>
    );
}

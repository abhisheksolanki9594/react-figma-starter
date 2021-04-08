import React from "react";
import styled from "styled-components";
import TaskTitle from "./TaskTitleSection";
import TaskTabData from "./TaskTabSection";

const CardDetails = styled.section`
    .tabs-list {
        box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%);
    }

    .task-overview {
        display: flex;
        flex-direction: column;
        justify-content: start;
    }

    .task-title {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: start;
        padding: 20px;
    }
`;

export default function TaskListModule() {
    return (
        <CardDetails>
            <div>
                <TaskTitle />
                <TaskTabData />
            </div>
        </CardDetails>
    );
}

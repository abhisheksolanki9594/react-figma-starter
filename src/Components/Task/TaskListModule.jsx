import React from "react";

import TaskTitle from "./TaskTitleSection";
import TaskTabData from "./TaskTabSection";
import { CardDetails } from "./Task.style";

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

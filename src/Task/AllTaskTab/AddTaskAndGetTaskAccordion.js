import React from "react";
import styled from "styled-components";

import moment from "moment";
import lodash from "lodash";

import SimpleSnackbar from "../../Shared/SnackbarComponent";
import GetTaskListAccordion from "./GetTaskListAccordion";

import { TextField, Button, DateFnsUtils, MuiPickersUtilsProvider, KeyboardDatePicker } from "../../Shared/MaterialComponents";

import AllTaskTabModule from "./AllTaskTabModule";

const TabContent = styled.section`
    padding: 0px 25ch 0px 25ch;
`;

const AllTabDetails = styled.section`
    display: flex;
    flex-direction: column;
    margin: 50px 0px 50px 0px;

    .add-task-section {
        display: flex;
        justify-content: space-between;
        margin: 0px 0px 50px 0px;
    }

    .add-task-section {
        .add-task-datepicker {
            width: 23ch;
            margin-right: 20px;
            margin-top: 0;
            margin-bottom: 0;
        }

        .add-task-input .MuiOutlinedInput-root {
            width: 105ch;
            margin-right: 20px;
        }

        .add-task-button {
            background-color: #1976d2;
            color: #ffffff;
            flex-grow: 1;
        }
    }

    .all-task-details {
        display: flex;
        flex-direction: column;

        .accordion-header {
            border: 1px solid rgba(0, 0, 0, 0.125);
            box-shadow: none;
            &:not(:last-child): {
                border-bottom: 0;
            }
            &:before: {
                display: none;
            }
            &$expanded: {
                margin: auto;
            }
        }

        .accordion-summary {
            background-color: rgba(0, 0, 0, 0.03);
            border-bottom: 1px solid rgba(0, 0, 0, 0.125);
            margin-bottom: -1;
            min-height: 56;
            &$expanded: {
                minheight: 56;
            }
        }

        .accordion-details {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding: 16px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.125);
            color: #000000 !important;

            .accordion-detail-checkbox {
                width: 135ch;
                border-right: 1px solid rgba(0, 0, 0, 0.125);
            }
        }
    }

    .strike-through-text {
        text-decoration: line-through;
    }
`;

export default function AddTaskAndGetTaskAccordion(props) {
    const { value, index } = props;

    const [selectedDate, setSelectedDate] = React.useState(moment().format());
    const [addTaskInput, setAddTaskInput] = React.useState("");

    const [showSnackBar, setShowSnackbarOpen] = React.useState(false);
    const [snackbarMessage, setSnackbarMessage] = React.useState("");

    const handleSnackbarClose = () => {
        setShowSnackbarOpen(false);
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const orderByTaskDate = () => {
        let orderByDates = lodash.cloneDeep(accordionData);
        orderByDates = lodash.orderBy(orderByDates, ["taskDate"], ["desc"]);
        return orderByDates;
    };

    let accordionData = [];
    if (window.localStorage.getItem("accordionData")) {
        accordionData = JSON.parse(window.localStorage.getItem("accordionData"));
        accordionData = orderByTaskDate();
    } else {
        let tempAccordionData = [
            {
                id: 1,
                taskDate: moment().format(),
                expanded: true,
                detailedTask: [
                    { subTaskId: 1, taskTitle: "Todo", isCompleted: false },
                    { subTaskId: 2, taskTitle: "Todo", isCompleted: false },
                    { subTaskId: 3, taskTitle: "Today new", isCompleted: false },
                ],
            },
            {
                id: 2,
                taskDate: moment().subtract(2, "d").format(),
                expanded: true,
                detailedTask: [
                    { subTaskId: 1, taskTitle: "Todo", isCompleted: false },
                    { subTaskId: 2, taskTitle: "Old new", isCompleted: false },
                ],
            },
            {
                id: 3,
                taskDate: moment().subtract(2, "d").format(),
                expanded: true,
                detailedTask: [
                    { subTaskId: 1, taskTitle: "Todo", isCompleted: true },
                    { subTaskId: 2, taskTitle: "Todo", isCompleted: true },
                ],
            },
            {
                id: 4,
                taskDate: moment().add(2, "d").format(),
                expanded: true,
                detailedTask: [{ subTaskId: 1, taskTitle: "New Date", isCompleted: false }],
            },
            {
                id: 5,
                taskDate: moment().add(4, "d").format(),
                expanded: true,
                detailedTask: [{ subTaskId: 1, taskTitle: "new date check", isCompleted: false }],
            },
        ];
        accordionData = tempAccordionData;
        tempAccordionData = orderByTaskDate();

        window.localStorage.setItem("accordionData", JSON.stringify(tempAccordionData));
    }

    const addNewTask = () => {
        if (selectedDate && selectedDate !== "") {
            const findSelectedDateTaskIndexIfPresent = accordionData.findIndex(
                (element) => moment(element.taskDate).format("YYYY-MM-DD") === moment(selectedDate).format("YYYY-MM-DD")
            );
            if (findSelectedDateTaskIndexIfPresent !== -1) {
                accordionData[findSelectedDateTaskIndexIfPresent].detailedTask.push({
                    subTaskId: accordionData[findSelectedDateTaskIndexIfPresent].detailedTask.length + 1,
                    taskTitle: addTaskInput,
                    isCompleted: false,
                });

                accordionData = orderByTaskDate();
                window.localStorage.setItem("accordionData", JSON.stringify(accordionData));

                setAddTaskInput("");
                AllTaskTabModule({ ...props });
            } else {
                accordionData.push({
                    id: accordionData.length + 1,
                    taskDate: moment(selectedDate).format(),
                    detailedTask: [
                        {
                            subTaskId: 1,
                            taskTitle: addTaskInput,
                            isCompleted: false,
                        },
                    ],
                });

                accordionData = orderByTaskDate();
                window.localStorage.setItem("accordionData", JSON.stringify(accordionData));

                setAddTaskInput("");
                AllTaskTabModule({ ...props });
            }
        } else {
            setSnackbarMessage("Please select the date for which you want to add task");
            setShowSnackbarOpen(true);
        }
    };

    return (
        <div role='tabpanel' hidden={value !== index} id={`simple-alltabdata-${index}`} aria-labelledby={`simple-alltabdata-${index}`}>
            {value === index && (
                <TabContent>
                    <AllTabDetails>
                        <div className='add-task-section'>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    className='add-task-datepicker'
                                    disableToolbar
                                    variant='inline'
                                    format='MM/dd/yyyy'
                                    margin='normal'
                                    id='task-datepicker'
                                    label='Task Date'
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        "aria-label": "change date",
                                    }}
                                />
                            </MuiPickersUtilsProvider>

                            <TextField
                                value={addTaskInput}
                                className='add-task-input'
                                id='addTaskInput'
                                variant='outlined'
                                label='What have you worked on?'
                                placeholder='What have you worked on?'
                                onChange={(event) => setAddTaskInput(event.target.value)}
                            />

                            <Button className='add-task-button' variant='contained' onClick={addNewTask}>
                                Add
                            </Button>
                        </div>

                        <GetTaskListAccordion accordionValues={accordionData} {...props} />
                    </AllTabDetails>
                </TabContent>
            )}

            {showSnackBar && (
                <SimpleSnackbar showSnackbar={showSnackBar} duration={2000} message={snackbarMessage} onClose={handleSnackbarClose}></SimpleSnackbar>
            )}
        </div>
    );
}

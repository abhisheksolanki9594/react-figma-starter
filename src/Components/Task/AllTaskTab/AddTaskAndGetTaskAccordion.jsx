import React from "react";

import moment from "moment";
import lodash from "lodash";

import SimpleSnackbar from "../../Commons/Snackbar/SnackbarComponent";
import GetTaskListAccordion from "./GetTaskListAccordion";

import { TextField, Button, DateFnsUtils, MuiPickersUtilsProvider, KeyboardDatePicker } from "../../Commons/Material/MaterialComponents";
import { AllTabDetails, TabContent } from "../Task.style";
import AllTaskTabModule from "./AllTaskTabModule";

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
        let tempAccordionData = [];

        fetch("http://localhost:5001/api/tasks/task-detail")
            .then((res) => res.json())
            .then(
                (result) => {
                    if (result.data) {
                        tempAccordionData = result.data.map((value, index) => {
                            value.id = index + 1;
                            value.taskDate = moment(value.taskDate).format();
                            value.expanded = true;

                            value.taskDetails.map((detailValue) => {
                                detailValue.taskDate = moment(detailValue.taskDate).format();
                                detailValue.taskIsCompleted = detailValue.taskIsCompleted === 1 ? true : false;
                                return detailValue;
                            });

                            return value;
                        });

                        accordionData = tempAccordionData;
                        tempAccordionData = orderByTaskDate();

                        window.localStorage.setItem("accordionData", JSON.stringify(tempAccordionData));
                    }
                },
                (error) => {
                    console.log(error);
                }
            );

        // let tempAccordionData = [
        //     {
        //         id: 1,
        //         taskDate: moment().format(),
        //         expanded: true,
        //         detailedTask: [
        //             { subTaskId: 1, taskTitle: "Todo", taskIsCompleted: false },
        //             { subTaskId: 2, taskTitle: "Todo", taskIsCompleted: false },
        //             { subTaskId: 3, taskTitle: "Today new", taskIsCompleted: false },
        //         ],
        //     },
        //     {
        //         id: 2,
        //         taskDate: moment().subtract(2, "d").format(),
        //         expanded: true,
        //         detailedTask: [
        //             { subTaskId: 1, taskTitle: "Todo", taskIsCompleted: false },
        //             { subTaskId: 2, taskTitle: "Old new", taskIsCompleted: false },
        //         ],
        //     },
        //     {
        //         id: 3,
        //         taskDate: moment().subtract(2, "d").format(),
        //         expanded: true,
        //         detailedTask: [
        //             { subTaskId: 1, taskTitle: "Todo", taskIsCompleted: true },
        //             { subTaskId: 2, taskTitle: "Todo", taskIsCompleted: true },
        //         ],
        //     },
        //     {
        //         id: 4,
        //         taskDate: moment().add(2, "d").format(),
        //         expanded: true,
        //         detailedTask: [{ subTaskId: 1, taskTitle: "New Date", taskIsCompleted: false }],
        //     },
        //     {
        //         id: 5,
        //         taskDate: moment().add(4, "d").format(),
        //         expanded: true,
        //         detailedTask: [{ subTaskId: 1, taskTitle: "new date check", taskIsCompleted: false }],
        //     },
        // ];
    }

    const addNewTask = () => {
        if (selectedDate && selectedDate !== "" && addTaskInput !== "") {
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
                            taskIsCompleted: false,
                        },
                    ],
                });

                accordionData = orderByTaskDate();
                window.localStorage.setItem("accordionData", JSON.stringify(accordionData));

                setAddTaskInput("");
                AllTaskTabModule({ ...props });
            }
        } else {
            if (selectedDate && selectedDate === "" && addTaskInput === "") {
                setSnackbarMessage("Please enter proper data to add task");
                setShowSnackbarOpen(true);
            } else if (selectedDate === "") {
                setSnackbarMessage("Please select the date for which you want to add task");
                setShowSnackbarOpen(true);
            } else if (addTaskInput === "") {
                setSnackbarMessage("Please add what you have worked on data to add task");
                setShowSnackbarOpen(true);
            }
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
                        {console.log(accordionData)}
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

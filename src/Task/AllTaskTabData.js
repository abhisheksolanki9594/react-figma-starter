import React from "react";
import {
    Typography,
    TextField,
    Button,
    MuiAccordion,
    MuiAccordionSummary,
    MuiAccordionDetails,
    Checkbox,
    FormControlLabel,
    IconButton,
    EditIcon,
    DeleteIcon,
} from "../Shared/MaterialComponents";
import { TabContent, AllTabDetails } from "./TaskCSS";
import CommonDialog from "../Shared/CommonDialogModal";

function GetTaskListAccordion(props) {
    const accordionValues = props.accordionValues;
    console.log("task", accordionValues);
    const [open, setOpen] = React.useState(false);
    const [selectedModalValue, setSelectedModalValue] = React.useState();

    const accordionData = JSON.parse(window.localStorage.getItem("accordionData"));

    const handleClose = (newValue) => {
        setOpen(false);

        if (newValue) {
            setSelectedModalValue(newValue);

            const findAccordionObjectIndex = accordionData.findIndex((element) => {
                return element.id === newValue.accordionId;
            });

            if (findAccordionObjectIndex !== -1) {
                const findSubTaskRecordObjectIndex = accordionData[findAccordionObjectIndex].detailedTask.findIndex((element) => {
                    return element.subTaskId === newValue.subTaskId;
                });
                if (findSubTaskRecordObjectIndex !== -1) {
                    accordionData[findAccordionObjectIndex].detailedTask.splice(findSubTaskRecordObjectIndex, 1);

                    window.localStorage.setItem("accordionData", JSON.stringify(accordionData));

                    CombinedSections({ ...props });
                }
            }
        }
    };

    const deleteTask = (accordionId, subTaskId, event) => {
        setOpen(true);
        setSelectedModalValue({ accordionId, subTaskId });
    };

    return (
        <div className='all-task-details'>
            <div className='week-title'>
                <Typography variant='h6'>
                    <strong>This Week</strong>
                </Typography>
            </div>

            {accordionValues.map((accordion) => (
                <MuiAccordion key={accordion.id.toString()} className='accordion-header' expanded={true}>
                    <MuiAccordionSummary className='accordion-summary'>
                        <Typography>{accordion.title}</Typography>
                    </MuiAccordionSummary>
                    {accordion.detailedTask.map((details, subIndex) => (
                        <MuiAccordionDetails key={details.subTaskId.toString()} className='accordion-details'>
                            <FormControlLabel
                                className={`accordion-detail-checkbox ${details.status === "completed" ? "strike-through-text" : ""}`}
                                onClick={(event) => event.stopPropagation()}
                                onFocus={(event) => event.stopPropagation()}
                                control={<Checkbox checked={details.status === "completed" ? true : false} />}
                                label={details.taskTitle}
                            />

                            <IconButton aria-label='edit' color='inherit'>
                                <EditIcon />
                            </IconButton>

                            <IconButton aria-label='delete' color='inherit' onClick={(e) => deleteTask(accordion.id, details.subTaskId, e)}>
                                <DeleteIcon />
                            </IconButton>
                        </MuiAccordionDetails>
                    ))}
                </MuiAccordion>
            ))}

            {open && (
                <CommonDialog
                    title='Delete Task'
                    description='Are you sure you want to delete this task?'
                    open={open}
                    onClose={handleClose}
                    selectedModalValue={selectedModalValue}
                ></CommonDialog>
            )}
        </div>
    );
}

function CombinedSections(props) {
    const { value, index } = props;

    let accordionData = [];
    if (window.localStorage.getItem("accordionData")) {
        accordionData = JSON.parse(window.localStorage.getItem("accordionData"));
        console.log(accordionData);
    } else {
        const tempAccordionData = [
            {
                id: 1,
                title: "Today",
                detailedTask: [
                    {
                        subTaskId: 1,
                        taskTitle: "Todo",
                        status: "active",
                    },
                    {
                        subTaskId: 2,
                        taskTitle: "Todo",
                        status: "active",
                    },
                ],
            },
            {
                id: 2,
                title: "Saturday, 21 Nov 2020",
                detailedTask: [
                    {
                        subTaskId: 1,
                        taskTitle: "Todo",
                        status: "active",
                    },
                ],
            },
            {
                id: 3,
                title: "Saturday, 21 Nov 2020",
                detailedTask: [
                    {
                        subTaskId: 1,
                        taskTitle: "Todo",
                        status: "completed",
                    },
                    {
                        subTaskId: 2,
                        taskTitle: "Todo",
                        status: "completed",
                    },
                ],
            },
        ];

        accordionData = tempAccordionData;
        console.log(accordionData);
        window.localStorage.setItem("accordionData", JSON.stringify(tempAccordionData));
    }

    return (
        <div role='tabpanel' hidden={value !== index} id={`simple-alltabdata-${index}`} aria-labelledby={`simple-alltabdata-${index}`}>
            {value === index && (
                <TabContent>
                    <AllTabDetails>
                        <div className='add-task-section'>
                            <TextField
                                className='add-task-input'
                                id='addTaskInput'
                                variant='outlined'
                                label='What have you worked on?'
                                placeholder='What have you worked on?'
                            />

                            <Button className='add-task-button' variant='contained'>
                                Add
                            </Button>
                        </div>

                        <GetTaskListAccordion accordionValues={accordionData} {...props} />
                    </AllTabDetails>
                </TabContent>
            )}
        </div>
    );
}

export default function AllTabData(props) {
    return <CombinedSections {...props} />;
}

import React, { useContext } from "react";
import { AppContext } from "../../App";

import Moment from "react-moment";
import moment from "moment";
import lodash from "lodash";

import {
    Typography,
    MuiAccordion,
    MuiAccordionSummary,
    MuiAccordionDetails,
    Checkbox,
    FormControlLabel,
    IconButton,
    EditIcon,
    DeleteIcon,
} from "../../Shared/MaterialComponents";
import SimpleSnackbar from "../../Shared/SnackbarComponent";
import CommonDialog from "../../Shared/CommonDialogModal";

import AllTaskTabModule from "./AllTaskTabModule";
import EditTask from "./EditTask";

export default function GetTaskListAccordion(props) {
    let accordionValues = props.accordionValues;
    const currentDate = moment().format();

    const { state } = useContext(AppContext);

    if (state && state.searchValue) {
        if (state.searchValue !== "") {
            const copyAccordionValues = lodash.cloneDeep(accordionValues);

            let accordionData = [];

            copyAccordionValues.map((value, index) => {
                accordionData.push({ ...value });
                delete accordionData[index].detailedTask;
                return value;
            });

            copyAccordionValues.map((value, index) => {
                accordionData[index].detailedTask = [];

                value.detailedTask.map((subTask) => {
                    const title = subTask.taskTitle.toLowerCase();
                    if (title.includes(state.searchValue)) {
                        accordionData[index].detailedTask.push(subTask);
                    }
                    return subTask;
                });
                return value;
            });

            const filterDataWithDetails = lodash.filter(accordionData, (element) => {
                return element.detailedTask.length !== 0;
            });

            accordionValues = filterDataWithDetails;
        } else {
            accordionValues = JSON.parse(window.localStorage.getItem("accordionData"));
        }
    }

    const [openCommonDialog, setCommonDialogOpen] = React.useState(false);
    const [selectedModalValue, setSelectedModalValue] = React.useState();

    const [openEditDialog, setOpenEditDialog] = React.useState(false);
    const [selectedEditModalValue, setSelectedEditModalValue] = React.useState();

    const [showSnackBar, setShowSnackbarOpen] = React.useState(false);
    const [snackbarMessage, setSnackbarMessage] = React.useState("");

    const handleSnackbarClose = () => {
        setShowSnackbarOpen(false);
    };

    const handleEditDialogClose = (newValue) => {
        setOpenEditDialog(false);

        if (newValue) {
            setSelectedEditModalValue(newValue);
            window.localStorage.setItem("accordionData", JSON.stringify(accordionValues));
        }
    };

    const handleCommonDialogClose = (newValue) => {
        setCommonDialogOpen(false);

        if (newValue) {
            setSelectedModalValue(newValue);

            const findAccordionObjectIndex = accordionValues.findIndex((element) => {
                return element.id === newValue.accordionId;
            });

            if (findAccordionObjectIndex !== -1) {
                const findSubTaskRecordObjectIndex = accordionValues[findAccordionObjectIndex].detailedTask.findIndex((element) => {
                    return element.subTaskId === newValue.subTaskId;
                });
                if (findSubTaskRecordObjectIndex !== -1) {
                    accordionValues[findAccordionObjectIndex].detailedTask.splice(findSubTaskRecordObjectIndex, 1);

                    if (accordionValues[findAccordionObjectIndex].detailedTask.length === 0) {
                        accordionValues.splice(findAccordionObjectIndex, 1);
                    }

                    window.localStorage.setItem("accordionData", JSON.stringify(accordionValues));

                    setSnackbarMessage("Task Successfully Deleted !!");
                    setShowSnackbarOpen(true);

                    AllTaskTabModule({ ...props });
                }
            }
        }
    };

    const editTask = (accordionDetailRecord) => {
        setOpenEditDialog(true);
        setSelectedEditModalValue(accordionDetailRecord);
    };

    const deleteTask = (accordionId, subTaskId) => {
        setCommonDialogOpen(true);
        setSelectedModalValue({ accordionId, subTaskId });
    };

    const handleAccordionToggle = (index) => {
        accordionValues.map((value, accordionValueIndex) => {
            if (index === accordionValueIndex) {
                value.expanded = !value.expanded;
            }
            return value;
        });

        window.localStorage.setItem("accordionData", JSON.stringify(accordionValues));
        AllTaskTabModule({ ...props });
    };

    return (
        <div className='all-task-details'>
            <div className='week-title'>
                <Typography variant='h6'>
                    <strong>This Week</strong>
                </Typography>
            </div>

            {accordionValues.map((accordion, index) => (
                <MuiAccordion
                    key={accordion.id.toString()}
                    className='accordion-header'
                    expanded={true}
                    onChange={() => handleAccordionToggle(index)}
                >
                    <MuiAccordionSummary className='accordion-summary'>
                        <Typography>
                            {moment(moment(accordion.taskDate).format("YYYY-MM-DD")).isSame(moment(currentDate).format("YYYY-MM-DD"), "day") ? (
                                "Today"
                            ) : (
                                <Moment date={accordion.taskDate} format='dddd, DD MMM YYYY' />
                            )}
                        </Typography>
                    </MuiAccordionSummary>
                    {accordion.detailedTask.map((details) => (
                        <MuiAccordionDetails key={details.subTaskId.toString()} className='accordion-details'>
                            <FormControlLabel
                                className={`accordion-detail-checkbox ${details.isCompleted ? "strike-through-text" : ""}`}
                                onClick={(event) => event.stopPropagation()}
                                onFocus={(event) => event.stopPropagation()}
                                control={<Checkbox checked={details.isCompleted} color='primary' />}
                                label={details.taskTitle}
                            />

                            <IconButton aria-label='edit' color='inherit' onClick={() => editTask(details)}>
                                <EditIcon />
                            </IconButton>

                            <IconButton aria-label='delete' color='inherit' onClick={() => deleteTask(accordion.id, details.subTaskId)}>
                                <DeleteIcon />
                            </IconButton>
                        </MuiAccordionDetails>
                    ))}
                </MuiAccordion>
            ))}

            {openCommonDialog && (
                <CommonDialog
                    title='Delete Task'
                    description='Are you sure you want to delete this task?'
                    open={openCommonDialog}
                    onClose={handleCommonDialogClose}
                    selectedModalValue={selectedModalValue}
                ></CommonDialog>
            )}

            {openEditDialog && (
                <EditTask
                    title='Edit Task'
                    open={openEditDialog}
                    selectedEditModalValue={selectedEditModalValue}
                    onClose={handleEditDialogClose}
                ></EditTask>
            )}

            {showSnackBar && (
                <SimpleSnackbar showSnackbar={showSnackBar} duration={2000} message={snackbarMessage} onClose={handleSnackbarClose}></SimpleSnackbar>
            )}
        </div>
    );
}

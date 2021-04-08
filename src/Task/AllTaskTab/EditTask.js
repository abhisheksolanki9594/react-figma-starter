import React from "react";
import styled from "styled-components";

import { TextField, Button, Checkbox, FormControlLabel, Dialog, DialogActions, DialogContent, DialogTitle } from "../../Shared/MaterialComponents";

const EditModalDetails = styled.div`
    display: flex;
    flex-direction: column;
`;

export default function EditTask(props) {
    const { title, onClose, open, selectedEditModalValue } = props;
    const [taskTitle, setTaskTitle] = React.useState(selectedEditModalValue.taskTitle);
    const [isTaskCompleted, setIsTaskCompleted] = React.useState(selectedEditModalValue.isCompleted);
    const nodeRef = React.createRef();

    React.useEffect(() => {
        if (!open) {
            setTaskTitle(selectedEditModalValue.taskTitle);
        }
    }, [selectedEditModalValue, open]);

    const handleCancel = () => {
        onClose();
    };

    const handleOk = () => {
        selectedEditModalValue.taskTitle = taskTitle;
        selectedEditModalValue.isCompleted = isTaskCompleted;

        onClose(selectedEditModalValue);
    };

    const handleChange = (event) => {
        setIsTaskCompleted(event.target.checked);
    };

    return (
        <Dialog
            ref={nodeRef}
            disableBackdropClick
            disableEscapeKeyDown
            maxWidth='xs'
            open={open}
            aria-labelledby='edit-task-dialog-title'
            aria-describedby='edit-task-dialog-description'
        >
            <DialogTitle id='edit-task-dialog-title'>{title}</DialogTitle>
            <DialogContent>
                <EditModalDetails>
                    <TextField
                        value={taskTitle}
                        className='add-task-input'
                        id='taskTitle'
                        variant='outlined'
                        label='What have you worked on?'
                        placeholder='What have you worked on?'
                        onChange={(event) => setTaskTitle(event.target.value)}
                    />

                    <FormControlLabel
                        control={<Checkbox checked={isTaskCompleted} onChange={handleChange} name='isTaskCompleted' color='primary' />}
                        label='Completed'
                    />
                </EditModalDetails>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCancel} color='primary'>
                    Cancel
                </Button>
                <Button onClick={handleOk} color='primary' autoFocus>
                    Update
                </Button>
            </DialogActions>
        </Dialog>
    );
}

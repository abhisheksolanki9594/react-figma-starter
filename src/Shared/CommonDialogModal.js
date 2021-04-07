import React from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "./MaterialComponents";

export default function CommonDialog(props) {
    const { title, description, onClose, open, selectedModalValue } = props;
    const [value, setValue] = React.useState(selectedModalValue);
    const nodeRef = React.createRef();

    React.useEffect(() => {
        if (!open) {
            setValue(selectedModalValue);
        }
    }, [selectedModalValue, open]);

    const handleCancel = () => {
        onClose();
    };

    const handleOk = () => {
        onClose(selectedModalValue);
    };

    return (
        <Dialog
            ref={nodeRef}
            disableBackdropClick
            disableEscapeKeyDown
            maxWidth='xs'
            open={open}
            aria-labelledby='alert-dialog-title'
            aria-describedby='alert-dialog-description'
        >
            <DialogTitle id='alert-dialog-title'>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText id='alert-dialog-description'>{description}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCancel} color='primary'>
                    Cancel
                </Button>
                <Button onClick={handleOk} color='primary' autoFocus>
                    OK
                </Button>
            </DialogActions>
        </Dialog>
    );
}
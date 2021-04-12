import React from "react";
import { Snackbar, IconButton, CloseIcon } from "../Material/MaterialComponents";

export default function SimpleSnackbar(props) {
    const { showSnackbar, duration, onClose, message } = props;
    const [open, setOpen] = React.useState(false);
    const nodeRef = React.createRef();

    React.useEffect(() => {
        if (!open) {
            setOpen(showSnackbar);
        }
    }, [showSnackbar, open]);

    const handleClose = () => {
        // setOpen(false);
        onClose();
    };

    return (
        <div>
            <Snackbar
                ref={nodeRef}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                }}
                open={open}
                autoHideDuration={duration ? duration : 6000}
                onClose={handleClose}
                message={message ? message : ""}
                action={
                    <React.Fragment>
                        <IconButton size='small' aria-label='close' color='inherit' onClick={handleClose}>
                            <CloseIcon fontSize='small' />
                        </IconButton>
                    </React.Fragment>
                }
            />
        </div>
    );
}

import React from 'react';
import { Snackbar } from '@material-ui/core';
import {toastr} from 'toastr'

const Notify = () => {
    const handleClose = () => {
        console.log("handle close");
    }
    return (
        toastr.info("Hello World!")
    )
}

export default Notify;

{/* <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            open={true}
            autoHideDuration={5000}
            TransitionComponent={Fade}
            message="I love snacks"
            key={Fade}
        /> */}
import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';

import './Success.css';

const Success = (props) =>  {
    return (
        <div>
            <Dialog
                open={props.open}
                keepMounted
                maxWidth="md"
                onClose={props.handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogContent className="success-content">
                    <div className="success-img">
                        <img src="/assets/img/icons/success.png" />
                    </div>
                    <h2 className="success-message">{props.message}</h2>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default Success;
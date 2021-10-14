import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import moment from 'moment';
import { useToasts } from 'react-toast-notifications';
import parse from 'html-react-parser';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogEvent = ({ open, setOpen, data, isAdmin, onEditEvent, onDeleteEvent }) => {
    const { addToast } = useToasts();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                fullScreen
                maxWidth="sm"
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{"Agregar nuevo evento"}</DialogTitle>
                <DialogContent className="mt-16">
                    <div>
                        <p><strong>Titulo:</strong> {data.title}</p>
                        <p><strong>Inicio:</strong> {data.start}</p>
                        {data.all_day == 0 && <p><strong>Fin:</strong> {data.end}</p>}

                        <div>
                            {parse(data.content)}
                        </div>
                    </div>
                </DialogContent>
                <DialogActions>
                    {isAdmin && <Button onClick={() => onDeleteEvent(data)} color="primary">
                        eliminar evento
                    </Button>}
                    {isAdmin && <Button onClick={() => onEditEvent(data)} color="primary">
                        editar evento
                    </Button>}
                    <Button onClick={handleClose} color="primary">
                        Cancelar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default DialogEvent;

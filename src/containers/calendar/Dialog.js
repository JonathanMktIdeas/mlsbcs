import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { EditorState } from 'draft-js';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import TextField from '@material-ui/core/TextField';
import moment from 'moment';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { convertFromHTML, ContentState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import service from '@utils/service';
import { useToasts } from 'react-toast-notifications';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogEvent = ({ open, setOpen, eventEdit }) => {
    const { addToast } = useToasts();
    const [editorState, setEditorState] = React.useState(EditorState.createEmpty());
    const [form, setForm] = React.useState({
        title: '',
        all_day: true,
        start: moment(new Date()),
        end: moment(new Date())
    });
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onEditorStateChange = (es) => {
        const content = draftToHtml(convertToRaw(es.getCurrentContent()));
        setForm({
            ...form,
            content,
        });
        setEditorState(es);
    };

    const submit = () => {
        const data = {
            title: form.title,
            start: form.start,
            content: form.content,
            all_day: form.all_day,
        };

        if (!data.all_day) {
            data.end = form.end;
        }

        const url = eventEdit ? `events/${eventEdit.id}` : 'events';
        const method = eventEdit ? 'put' : 'post';
        const message = eventEdit ? 'El evento fue actualizado correctamente' : 'El evento fue creado correctamente';

        service(url, null, data, method)
            .then(data => {
                if (data.data) {
                    addToast(message, {
                        appearance: 'success',
                        autoDismiss: true,
                    });
                    handleClose();
                } else {
                    addToast('Algo salio mal', {
                        appearance: 'error',
                        autoDismiss: true,
                    });
                }
            })
            .catch(() => {
                addToast('Algo salio mal', {
                    appearance: 'error',
                    autoDismiss: true,
                });
            });
    }

    const canBeSubmitted = () => {
        let success = true;

        if (!form.title || form.title == '') {
            success = false;
        }

        if (!form.start || form.start == '') {
            success = false;
        }

        if (!form.all_day && (!form.end || form.end == '')) {
            success = false;
        }

        if (!form.content || form.content == '') {
            success = false;
        }

        return success;
    }

    React.useEffect(() => {
        if (eventEdit) {
            setForm({
                ...eventEdit,
                all_day: eventEdit.all_day === 1,
                start: moment(eventEdit.start).format('YYYY-MM-DD'),
                end: moment(eventEdit.end).format('YYYY-MM-DD'),
            });

            const blocksFromHTML = convertFromHTML(eventEdit.content);
            const content = ContentState.createFromBlockArray(
                blocksFromHTML.contentBlocks,
                blocksFromHTML.entityMap
            );
            const es = EditorState.createWithContent(content);
            setEditorState(es);
        }
    }, [eventEdit]);

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
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={form.all_day}
                                    onChange={(e, value) => {
                                        setForm({
                                            ...form,
                                            all_day: value
                                        });
                                    }}
                                    name="allDay"
                                    color="primary"
                                />
                            }
                            label="Todo el dia"
                        />
                        <div className="my-2">
                            <TextField
                                id="datetime-local"
                                label="Titulo"
                                type="text"
                                variant="outlined"
                                value={form.title}
                                onChange={(e) => {
                                    setForm({
                                        ...form,
                                        title: e.target.value
                                    });
                                }}
                                className="w-full"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </div>
                        <div className="my-2">
                            <TextField
                                id="datetime-local"
                                label="Inicio"
                                type={form.all_day ? "date" : "datetime-local"}
                                variant="outlined"
                                className="w-full"
                                defaultValue={form.start}
                                value={form.start}
                                onChange={(e, value) => {
                                    setForm({
                                        ...form,
                                        start: e.target.value,
                                    });
                                }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </div>
                        <div className="my-2">
                            <TextField
                                id="datetime-local"
                                label="Fin"
                                type="datetime-local"
                                variant="outlined"
                                className="w-full"
                                disabled={form.all_day}
                                value={form.end}
                                defaultValue={form.end}
                                onChange={(e, value) => {
                                    setForm({
                                        ...form,
                                        end: e.target.value,
                                    });
                                }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </div>
                        <div className="border-2 h-48">
                            <Editor
                                editorState={editorState}
                                toolbarClassName="toolbarClassName"
                                wrapperClassName="wrapperClassName h-32"
                                editorClassName="editorClassName h-32"
                                onEditorStateChange={onEditorStateChange}
                            />
                        </div>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancelar
                    </Button>
                    <Button onClick={submit} disabled={!canBeSubmitted()} color="primary">
                        Guardar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default DialogEvent;

import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux';
import { login, passwordUpdated } from '@modules/auth/actions';
import { useToasts } from 'react-toast-notifications';
import Slide from '@material-ui/core/Slide';
import CircularProgress from '@material-ui/core/CircularProgress';
import service from '@utils/service';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const LoginModal = ({ open, handleClose, t, ...props }) => {
    const { addToast } = useToasts();
    const [form, setForm] = React.useState({});
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        if (props.auth.loguedIn) {
            handleClose();
        }
    }, [props.auth.loguedIn]);

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
                keepMounted
                aria-labelledby="form-dialog-title"
                BackdropProps={{
                    style: {
                        backgroundColor: 'transparent',
                        boxShadow: 'none',
                    }
                }}
            >
                <DialogTitle id="form-dialog-title">{t('change_password')}</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="password"
                        id="password"
                        value={form.password}
                        onChange={(e) => { setForm({ ...form, password: e.target.value }); }}
                        label={t('password')}
                        type="password"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="confirm_password"
                        id="confirm_password"
                        value={form.confirm_password}
                        onChange={(e) => { setForm({ ...form, confirm_password: e.target.value }); }}
                        label={t('confirm_password')}
                        type="password"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" disabled={loading}>
                        {t('cancel')}
                    </Button>
                    <Button
                        disabled={loading}
                        onClick={() => {
                            if (form.password.length < 4) {
                                addToast('Your password should be at least min 4 characters', {
                                    appearance: 'error',
                                    autoDismiss: true,
                                });
                                return;
                            }

                            if(form.password !== form.confirm_password) {
                                addToast('Your passwords are not the same', {
                                    appearance: 'error',
                                    autoDismiss: true,
                                });
                                return;
                            }
                            setLoading(true);

                            service('member/updatePassword', null, {password: form.password}, 'post')
                                .then(data => {
                                    setLoading(false);
                                    addToast('Your password is updated successfully', {
                                        appearance: 'success',
                                        autoDismiss: false,
                                    });
                                    props.passwordUpdated();
                                    handleClose();
                                })
                                .catch(err => {
                                    setLoading(false);
                                    addToast('We found an application error: ' + err, {
                                        appearance: 'error',
                                        autoDismiss: true,
                                    });
                                })
                        }}
                        color="primary"
                    >
                        {loading && <CircularProgress color="primary" size={20} />}
                        {t('save')}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

const mapDispatchToProps = {
    login, passwordUpdated
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);

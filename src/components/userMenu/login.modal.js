import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux';
import { login } from '@modules/auth/actions';
import { useToasts } from 'react-toast-notifications';
import Slide from '@material-ui/core/Slide';
import CircularProgress from '@material-ui/core/CircularProgress';
import service from '@utils/service';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const LoginModal = ({ open, handleClose, t, loginSuccess, ...props }) => {
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
                <DialogTitle id="form-dialog-title">{t('login')}</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        value={form.email}
                        onChange={(e) => { setForm({ ...form, email: e.target.value }); }}
                        label={t('write_mls_email')}
                        type="email"
                        fullWidth
                    />
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
                    <a onClick={() => {
                        if(!form.email || form.email == '') {
                            addToast('Fill your email', {
                                appearance: 'error',
                                autoDismiss: true,
                            });
                            return;
                        }

                        service('member/auth/recover', null, {email: form.email}, 'post')
                            .then(data => {
                                addToast('Check your email out, you should received your new password.', {
                                    appearance: 'info',
                                    autoDismiss: false,
                                });
                            });
                    }} style={{ color: '#79a7d7', cursor: 'pointer' }}>{t('forgot')}</a>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" disabled={loading}>
                        {t('cancel')}
                    </Button>
                    <Button
                        disabled={loading}
                        type="button"
                        onClick={() => {
                            setLoading(true);
                            props.login(form.email, form.password)
                                .then((data) => {
                                    setLoading(false);
                                    loginSuccess(data);
                                })
                                .catch(err => {
                                    setLoading(false);
                                    addToast('We found an application error: ' + err, {
                                        appearance: 'error',
                                        autoDismiss: true,
                                    });
                                });
                        }}
                        color="primary"
                    >
                        {loading && <CircularProgress color="primary" size={20} />}
                        {t('login')}
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
    login,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);

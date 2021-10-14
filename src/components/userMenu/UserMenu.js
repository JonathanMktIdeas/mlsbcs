import React from 'react';
import Language from '@components/language';
import styled from './UserMenu.style';
import LoginModal from './login.modal';
import LoginPassword from './password.modal';
import { connect } from 'react-redux';
import { logout } from '@modules/auth/actions';
import { useToasts } from 'react-toast-notifications';

const Header = (props) => {
    const { addToast } = useToasts();
    const { t } = props.useTranslation('common');
    const [open, setOpen] = React.useState(false);
    const [openPassword, setOpenPassword] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClickOpenPassword = () => {
        setOpenPassword(true);
    };

    const handleClose = () => {
        if (props.match.path !== '/pay' || props.auth.loguedIn)
        {
            setOpen(false);
        }
    };

    const handleClosePassword = () => {
        setOpenPassword(false);
    };

    const handlePay = () => {
        props.history.push('/pay');
    };

    const logout = () => {
        props.logout();
    }

    React.useEffect(() => {
        if (props.match.path == '/pay' && props.navbar && !props.auth.loguedIn)
        {
            handleClickOpen();
        }
    }, []);

    React.useEffect(() => {
        console.log('aaaa', props);
        if (props.auth.loguedIn && props.auth.data && !props.auth.data.password_updated) {
            console.log('pasoooo');
            setOpenPassword(true);
        }
    }, [props.auth.loguedIn]);

    const loginSuccess = (data) => {
        console.log('data', data);
        if (!data.password_updated) {
            console.log('here');
            setTimeout(() => {
                setOpenPassword(true);
            }, 1900);
        }
    }

    if (props.navbar) {
        return (
            <div className="w-full flex items-start flex-col md:hidden xl:hidden px-4">
                <styled.ButtonKya onClick={() => props.history.push('/kya')} className="px-6 py-1 text-white font-bold my-2">
                    {t('kya')}
                </styled.ButtonKya>
                {props.auth.loguedIn ? (
                    <>
                        <styled.ButtonLogin onClick={logout} className="px-6 py-1 text-white font-bold my-2">
                            Logout
                        </styled.ButtonLogin>
                        <styled.ButtonPay className="px-6 py-1 text-white font-bold my-2" onClick={handlePay}>
                            {t('pay')}
                        </styled.ButtonPay>
                    </>
                ) : (
                    <styled.ButtonLogin onClick={handleClickOpen} className="px-6 py-1 text-white font-bold my-2">
                        {t('login')}
                    </styled.ButtonLogin>
                )}
                <Language {...props} />
                {open && <LoginModal t={t} handleClose={handleClose} open={open} loginSuccess={loginSuccess} />}
                <LoginPassword t={t} handleClose={handleClosePassword} open={openPassword} />
            </div>
        );
    }

    return (
        <div className="flex items-center hidden md:flex xl:flex">
            <styled.ButtonKya onClick={() => props.history.push('/kya')} className="px-6 py-1 text-white font-bold my-2">
                {t('kya')}
            </styled.ButtonKya>
            {props.auth.loguedIn ? (
                <>
                    <styled.ButtonLogin onClick={logout} className="px-6 py-1 text-white font-bold my-2">
                        Logout
                    </styled.ButtonLogin>
                    <styled.ButtonPay className="px-6 py-1 text-white font-bold my-2" onClick={handlePay}>
                        {t('pay')}
                    </styled.ButtonPay>
                </>
            ) : (
                <styled.ButtonLogin onClick={handleClickOpen} className="px-6 py-1 text-white font-bold my-2">
                    {t('login')}
                </styled.ButtonLogin>
            )}
            <Language {...props} />
            {open && <LoginModal t={t} handleClose={handleClose} open={open} loginSuccess={loginSuccess} />}
            <LoginPassword t={t} handleClose={handleClosePassword} open={openPassword} />
        </div>
    );
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

const mapDispatchToProps = {
    logout
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

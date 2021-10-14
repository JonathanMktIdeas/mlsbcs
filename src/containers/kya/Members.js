import React from 'react';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import styled from './Members.style';
import { connect } from 'react-redux';
import Slider from "react-slick";
import DirectorCard from "@components/directorCard";
import service from '@utils/service';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '@modules/counter/actions';
import Pagination from '@material-ui/lab/Pagination';
import ScrollAnimation from 'react-animate-on-scroll';

const Members = props => {
    const { t } = props.useTranslation('common');
    const [data, setData] = React.useState([]);
    const [syncing, setSyncing] = React.useState(false);
    const [timer, setTimer] = React.useState(null);
    const [offset, setOffset] = React.useState(1);
    const [total, setTotal] = React.useState(0);
    const [search, setSearch] = React.useState({ name: '', company: '', sortBy: '' });
    const [limit, setLimit] = React.useState(18);

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const fetchData = (lastname) => {
        let params = { lastname };

        service('member/kya', params, null, 'get')
            .then(data => {
                setTimer(null);
                setData(data.data);
                setOpen(true);
                // setSearch(data.data.search |);
            });
    };

    const onChangeSearch = (field, e) => {
        const oldSearch = search;
        const value = e.target.value;

        oldSearch[field] = value;

        if (timer) {
            clearTimeout(timer);
            setTimer(null);
        }

        let t = setTimeout(() => {
            setOffset(0);
            // fetchData(oldSearch);
        }, 300);
        setTimer(t);
        setSearch(oldSearch);
    }

    const onSearch = s => {
        fetchData(s);
    };

    React.useEffect(() => {
        // fetchData(search);
    }, [offset]);

    return (
        <div>
            <styled.Banner className="flex justify-center items-center flex-col">
                <styled.Shadow className="w-2/3 xl:w-full text-6xl text-white font-bold uppercase flex justify-center">KYA</styled.Shadow>
                <div className="w-2/3 xl:w-full grid xl:grid-cols-7 grid-cols-2 gap-4 mt-4">
                    <div className="col-span-2" />
                    <div className="col-span-2">
                        <input
                            onKeyPress={event => {
                                if (event.key === 'Enter') {
                                    onSearch(search.name)
                                }
                            }}
                            placeholder={t('full_name')} value={search.name} onChange={onChangeSearch.bind(this, 'name')} type="text" name="name" id="name" className="p-2 rounded-lg border-2 w-full" />
                    </div>
                    <styled.Button onClick={() => onSearch(search.name)}>
                        {t('search')}
                    </styled.Button>
                </div>
            </styled.Banner>

            <div className="container w-full mx-auto xl:grid xl:grid-cols-6 grid-cols-1 pt-20 pb-20 xl:flex-row flex-col-reverse flex">
                <div className="col-span-2">
                    <ScrollAnimation animateIn="animate__bounceInRight" animateOnce>
                        <styled.Title className="font-bold">{t('about')}</styled.Title>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__bounceInRight" animateOnce>
                        <styled.Subtitle className="font-bold mt-4">KYA</styled.Subtitle>
                    </ScrollAnimation>
                    <div className="container w-full pt-12">
                        <p className="text-md text-justify">{t('first_t')}</p>
                    </div>
                    <img src="/assets/images/kya2.jpeg" alt="kya2" className="mt-8" />
                    <div className="container w-full pt-12">
                        <p className="text-md text-justify">{t('second_t')}</p>
                    </div>
                    <div className="container w-full pt-12">
                        <p className="text-md text-justify">{t('third_t')}</p>
                    </div>
                    <div className="container w-full pt-12">
                        <p className="text-md text-justify">{t('fourth_t')}</p>
                    </div>
                </div>
                <div className="col-span-4 pl-20">
                    {data && data.length > 0 && (<ScrollAnimation animateIn="animate__bounceInRight" animateOnce>
                        <styled.Title2 className="font-bold">{t('result')}</styled.Title2>
                    </ScrollAnimation>)}
                    {data && data.length > 0 && (<div className="container w-full">
                        <div className="grid xl:grid-cols-2 sm:grid-cols-2 grid-cols-1">
                            {data && data.map((d, i) => (
                                <DirectorCard
                                    key={i}
                                    company={d.agency.name}
                                    name={d.name}
                                    position=""
                                    t={t}
                                    phone={d.agency.phone}
                                    email={d.email}
                                    image={d.photo ? d.photo : "/assets/images/director.png"}
                                />
                            ))}
                        </div>
                    </div>)}
                </div>
            </div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                {/*<DialogTitle id="alert-dialog-title">{t(data && data.length > 0 ? 'congrats' : 'fail')}</DialogTitle>*/}
                <DialogContent className="mx-auto" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', maxWidth: '80%' }}>
                    <img src="/logo_blue.png" alt="logo" />
                    <styled.TitleModal>{t(data && data.length > 0 ? 'congrats' : 'fail')}</styled.TitleModal>
                    <DialogContentText id="alert-dialog-description">
                        {t(data && data.length > 0 ? 'congrats_text' : 'fail_text')}
                    </DialogContentText>
                    {data && data.length <= 0 && (
                        <styled.TitleModal2>{t('call_to')}</styled.TitleModal2>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

const mapStateToProps = ({ counter }) => ({
  count: counter.count,
  isIncrementing: counter.isIncrementing,
  isDecrementing: counter.isDecrementing
})

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  changePage: () => push('/')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Members)

import React from 'react';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import styled from './Members.style';
import { connect } from 'react-redux';
import Slider from "react-slick";
import DirectorCard from "@components/directorCard";
import service from '@utils/service';
import CircularProgress from '@material-ui/core/CircularProgress';
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

    const fetchData = (s = {}) => {
        let params = { ...s, paginated: 1, offset, limit };

        service('member/paginated', params, null, 'get')
            .then(data => {
                setTimer(null);
                setData(data.data.data);
                setOffset(data.data.offset);
                setTotal(data.data.total);
                // setSearch(data.data.search |);
            });
    };

    const syncData = () => {
        setSyncing(true);
        service('member/sync', null, null, 'get')
            .then(data => {
                setSyncing(false);
                fetchData(search);
            })
            .catch(() => {
                setSyncing(false);
            })
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

    React.useEffect(() => {
        fetchData(search);
    }, [offset]);

        
    return (
        <div>
            <styled.Banner className="flex justify-center items-center">
                <styled.Shadow className="text-6xl text-white font-bold uppercase">{t('members')}</styled.Shadow>
            </styled.Banner>
            <div className="container xl:w-2/5 mx-auto my-24 px-8 xl:px-0">
                <styled.P className="text-xs text-justify">{t('e_lists')}</styled.P>
            </div>
            <div className="flex flex-col justify-end p-8 border-t-2 mx-0 xl:mx-16 w-full xl:w-4/5 mx-auto" id="directory">
                <ScrollAnimation animateIn="animate__bounceInRight" animateOnce>
                    <styled.Title className="font-bold">{t('member_directory')}</styled.Title>
                    {props.auth.data && props.auth.data.is_admin === 1 && <styled.Button onClick={syncData}>
                        {syncing ? <CircularProgress size={20} color="white" /> : t('sync')}
                    </styled.Button>}
                </ScrollAnimation>
                <ScrollAnimation animateIn="animate__bounceInRight" animateOnce>
                    <styled.Subtitle className="font-bold mt-4">{t('directory')}</styled.Subtitle>
                </ScrollAnimation>
                <div className="w-full mt-4">
                    <ScrollAnimation animateIn="animate__bounceInRight" animateOnce>
                        <div className="grid grid-cols-9 gap-4 mt-4">
                            <div>
                                {t('name')}
                            </div>
                            <div className="col-span-9 xl:col-span-3">
                                <input value={search.name} onChange={onChangeSearch.bind(this, 'name')} type="text" name="name" id="name" className="border-2 w-full" />
                            </div>
                        </div>
                        <div className="grid grid-cols-9 gap-4 mt-4">
                            <div>
                                {t('company')}
                            </div>
                            <div className="col-span-9 xl:col-span-3">
                                <input value={search.company} onChange={onChangeSearch.bind(this, 'company')} type="text" name="name" id="name" className="border-2 w-full" />
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>

            <div className="container xl:w-3/4 mx-auto pb-24">
                <ScrollAnimation animateIn="animate__bounceInRight" animateOnce>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2">
                        {data && data.map((d, i) => (
                            <DirectorCard
                                key={i}
                                name={d.name}
                                company={d.agency.name}
                                position=""
                                t={t}
                                phone={`${d.agency.phone ? d.agency.phone : ''}`}
                                mobile={`${d.phone}`}
                                email={d.email}
                                image={d.photo ? d.photo : "/assets/images/director.png"}
                            />
                        ))}
                    </div>
                </ScrollAnimation>
                <Pagination
                    onChange={(e, page) => {
                        setOffset(page);
                    }}
                    page={offset}
                    count={Math.ceil(total / limit)}
                    color="primary"
                    siblingCount={2}
                    boundaryCount={2}
                />
            </div>
            <div className="flex flex-col justify-center items-center p-8 mx-16 w-4/5 mx-auto">
                <ScrollAnimation animateIn="animate__bounceInRight" animateOnce>
                    <styled.Title className="font-bold uppercase">{t('member')}</styled.Title>
                </ScrollAnimation>
                <ScrollAnimation animateIn="animate__bounceInRight" animateOnce>
                    <styled.Subtitle className="font-bold mt-4 uppercase">{t('application')}</styled.Subtitle>
                </ScrollAnimation>

            </div>
            <styled.Content className="p-4 xl:p-12 mt-8 pb-40" id="application">
                <div className="container w-full mx-auto">
                    <div className="flex flex-col my-24">
                        <div className="flex justify-center">
                            <div className="w-4/5">
                                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                                    <div>
                                        <ScrollAnimation animateIn="animate__bounceInRight" animateOnce>
                                            <styled.Image src="/assets/images/become_member.jpg" alt="become" />
                                        </ScrollAnimation>
                                    </div>
                                    <div className="flex flex-col justify-center items-start p-0 xl:p-12">
                                        <ScrollAnimation animateIn="animate__bounceInRight" animateOnce>
                                            <styled.Big>{t('thank_you')}</styled.Big>
                                        </ScrollAnimation>
                                        <ScrollAnimation animateIn="animate__bounceInRight" animateOnce>
                                            <styled.Small className="font-semi text-justify mt-2">{t('use_the_most')}</styled.Small>
                                        </ScrollAnimation>
                                        <ScrollAnimation animateIn="animate__bounceInRight" animateOnce>
                                            <styled.P className="text-xs text-white font-normal mt-6"><strong className="font-bold">{t('interested')}</strong> {t('read_rulws')}</styled.P>
                                            {/*<styled.Button className="mt-8" onClick={() => {
                                                props.history.push('/form');
                                            }}>
                                                {t('fill_form')}
                                            </styled.Button>*/}
                                        </ScrollAnimation>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </styled.Content>
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

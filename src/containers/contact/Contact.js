import React from 'react';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import styled from './Contact.style';
import { connect } from 'react-redux';
import Slider from "react-slick";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import DirectorCard from "@components/directorCard";
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '@modules/counter/actions';

const Home = props => {
    const { t } = props.useTranslation('common');
    let slider = React.useRef(null);

    return (
        <div>
            <styled.Banner className="flex justify-center items-center">
                <p className="text-6xl text-white font-bold uppercase">{t('about')}</p>
            </styled.Banner>
            <div className="grid grid-cols-1 xl:grid-cols-2 p-8 xl:p-0">
                <div className="container mx-auto">
                    <div className="flex w-full xl:w-2/3 flex-col justify-start items-start m-2 xl:m-12" id="directors">
                        <styled.Title className="font-bold text-center">{t('multiple')}</styled.Title>
                        <div className="w-2/3 flex justify-start mt-4">
                            <p className="text-lg">Paseo La Marina # 4107, 1er piso, Cabo San Lucas 23406, B.C.S., México</p>
                        </div>
                        <styled.Phone>T. +52 (624) 172-7022</styled.Phone>
                        <styled.Hours className="font-bold text-center mb-4">{t('hours')}</styled.Hours>
                        <p className="text-lg"><span className="font-bold">{t('mon_fri')}</span> 9am - 5pm</p>
                        <p className="text-lg"><span className="font-bold">{t('sat')}</span> 9am - 1pm</p>
                        <p className="text-lg">{t('call_appointment')}</p>
                    </div>
                </div>

                <div className="flex justify-center items-center">
                    <div className="w-full flex flex-col justify-start items-start m-2 xl:m-12">
                        <styled.Title className="font-bold text-center">{t('hello')}</styled.Title>
                        <styled.SimpleTitle className="font-bold">{t('send_us_message')}</styled.SimpleTitle>
                        <styled.Label>*{t('name')}</styled.Label>
                        <styled.Input placeholder={t('name')} />
                        <styled.Label>*{t('email')}</styled.Label>
                        <styled.Input placeholder={t('email')} />
                        <styled.Label>*{t('subject')}</styled.Label>
                        <styled.Input placeholder={t('subject')} />
                        <styled.Label>*{t('message')}</styled.Label>
                        <styled.TextArea placeholder={t('message')} />
                        <div className="flex flex-row">
                            <styled.Button className="mt-8 uppercase">
                                {t('submit')}
                                <ArrowRightAltIcon />
                            </styled.Button>
                        </div>
                    </div>
                </div>
            </div>
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
)(Home)

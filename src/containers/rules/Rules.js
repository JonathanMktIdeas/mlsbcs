import React from 'react';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import styled from './Rules.style';
import { connect } from 'react-redux';
import Slider from "react-slick";
import DirectorCard from "@components/directorCard";
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '@modules/counter/actions';
const settings = {
    dots: false,
    infinite: false,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ],
};

const Rules = props => {
    const { t } = props.useTranslation('common');
    let slider = React.useRef(null);

    return (
        <div>
            <styled.Banner className="flex justify-center items-center">
                <styled.Shadow className="text-6xl text-white font-bold uppercase">{t('rules')}</styled.Shadow>
            </styled.Banner>
            <div className="container xl:w-3/4 mx-auto my-24 px-8 xl:px-0">
                <div className="grid grid-cols-1 xl:grid-cols-5 gap-4">
                    <div className="col-span-3">
                        <div className="w-full xl:w-2/3 mx-auto">
                            <styled.Title className="font-bold">{t('operating')}</styled.Title>
                            <styled.Subtitle className="font-bold mt-4">{t('policies')}</styled.Subtitle>
                        </div>
                    </div>
                    <div  className="col-span-3 xl:col-span-2">
                        <styled.P className="text-xs text-justify">{t('following_pages')}</styled.P>
                    </div>
                </div>
                <div className="flex flex-col justify-end mt-12">
                    <div className="grid grid-cols-3 gap-4">
                        <div></div>
                        <div className="col-span-3 xl:col-span-2">
                            <iframe height="600" width="100%" src="/assets/pdf/operating.pdf" />
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
)(Rules)

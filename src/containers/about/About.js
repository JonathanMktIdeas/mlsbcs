import React from 'react';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import styled from './About.style';
import { connect } from 'react-redux';
import Slider from "react-slick";
import DirectorCard from "@components/directorCard";
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '@modules/counter/actions';
import ScrollAnimation from 'react-animate-on-scroll';
import service from '@utils/service';

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

const Home = props => {
    const { t } = props.useTranslation('common');
    const [data, setData] = React.useState([]);
    let slider = React.useRef(null);

    React.useEffect(() => {
        service('board', null, null, 'get')
            .then(data => {
                setData(data.data);
            })
            .catch(() => {
                console.log('catch');
            })
    }, []);

    return (
        <div>
            <styled.Banner className="flex justify-center items-center">
                <styled.BannerTitle className="text-6xl text-white font-bold uppercase">{t('about')}</styled.BannerTitle>
            </styled.Banner>
            <div className="container xl:w-3/4 mx-auto">
                <div className="flex flex-col justify-center items-center m-2 xl:m-12" id="directors">
                    <ScrollAnimation animateIn="animate__bounceInRight" animateOnce>
                        <styled.Title className="font-bold text-center">{t('board_of')}</styled.Title>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__bounceInRight" animateOnce>
                        <styled.Subtitle className="font-bold text-center">{t('directors')}</styled.Subtitle>
                    </ScrollAnimation>
                    <div className="w-4/5 xl:w-2/3 flex justify-center mt-4">
                        <ScrollAnimation animateIn="animate__bounceInRight" animateOnce>
                            <styled.P className="text-xs text-center">{t('our_board')}</styled.P>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
            <div className="container xl:w-3/4 mx-auto">
                <ScrollAnimation animateIn="animate__bounceInRight" animateOnce>
                    <div className="justify-evenly flex flex-wrap">
                        {data.map((board, index) => (
                            <DirectorCard
                                company={board.agency.name}
                                name={board.name}
                                position={board.board_title}
                                phone={board.phone}
                                t={t}
                                email={board.email}
                                image={board.photo && board.photo != '' ? board.photo : '/assets/images/director.png'}
                                key={index}
                            />
                        ))}
                    </div>
                </ScrollAnimation>
            </div>
            <div className="mt-24" id="staff">
                <ScrollAnimation animateIn="animate__bounceInDown" animateOnce>
                    <styled.Subtitle className="font-bold text-center">{t('staff')}</styled.Subtitle>
                </ScrollAnimation>
                <styled.Content className="p-12 mt-8 pb-40">
                    <div className="container xl:w-3/4 mx-auto">
                        <ScrollAnimation animateIn="animate__bounceInDown" animateOnce>
                            <Slider {...settings} ref={c => (slider = c)}>
                                <DirectorCard
                                    name="NORMA DE LA GARZA"
                                    position={t('ADMINISTRATION')}
                                    phone="+(624) 172-70-22"
                                    email="admin@mlsbcs.com.mx"
                                    t={t}
                                    light
                                    image="/assets/images/staff.jpg"
                                />
                            </Slider>
                        </ScrollAnimation>
                    </div>
                </styled.Content>
            </div>

            <ScrollAnimation animateIn="animate__bounceInDown" animateOnce>
                <div className="flex justify-center items-center m-12 xl:m-40">
                    <div className="w-full xl:w-3/5 flex flex-col justify-center items-center p-2 xl:p-8 xl:p-24 shadow-2xl -mt-24 xl:-mt-64 bg-white">
                            <styled.SimpleTitle className="font-bold">{t('good_hands')}</styled.SimpleTitle>
                            <styled.Subtitle className="font-bold mb-12">{t('contact_us')}</styled.Subtitle>
                            <styled.Input placeholder={t('name')} />
                            <styled.Input placeholder={t('email')} />
                            <styled.Input placeholder={t('phone')} />
                            <styled.TextArea placeholder={t('message')} />
                            <styled.Button>{t('send')}</styled.Button>
                    </div>
                </div>
            </ScrollAnimation>
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

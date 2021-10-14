import React from 'react';
import Slider from "react-slick";
import Language from '@components/language';
import styled from './TechnologyPowered.style';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import ScrollAnimation from 'react-animate-on-scroll';

const settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
};

const Header = (props) => {
    let slider = React.useRef(null);
    const { t } = props.useTranslation('common');

    return (
        <div className="flex flex-col">
            <div className="flex justify-end">
                <div className="w-full xl:w-4/5">
                    <styled.Container className="py-46">
                        <div className="w-full xl:w-4/5 grid grid-cols-1 xl:grid-cols-2 gap-4 px-6 xl:p-0">
                            <ScrollAnimation animateIn="animate__lightSpeedInLeft" animateOnce>
                                <div className="flex items-center justify-center p-16">
                                    <styled.Powered>{t('powered_by')} <styled.PoweredBY>Flexmls</styled.PoweredBY></styled.Powered>
                                </div>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="animate__lightSpeedInRight" animateOnce>
                                <div className="flex items-center justify-center  py-16">
                                    <styled.P className="text-white text-sm">{t('it_also')}</styled.P>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </styled.Container>
                </div>
            </div>
            <div className="w-full">
                <ScrollAnimation animateIn="animate__lightSpeedInLeft" animateOnce>
                    <styled.Container className="pt-8 xl:p-0">
                        <div className="relative w-full xl:w-4/5">
                            <div className="absolute right-0 -mt-8 bg-white">
                                <styled.Button onClick={() => {
                                    slider.slickPrev();
                                }}><KeyboardArrowLeftIcon /></styled.Button>
                                <styled.Button onClick={() => {
                                    slider.slickNext();
                                }}><KeyboardArrowRightIcon /></styled.Button>
                            </div>
                            <Slider {...settings} ref={c => (slider = c)}>
                                <div>
                                    <styled.Photo src="/assets/images/foto1.jpg" alt="1" />
                                </div>
                                <div>
                                    <styled.Photo src="/assets/images/foto2.png" alt="2" />
                                </div>
                                <div>
                                    <styled.Photo src="/assets/images/foto3.jpeg" alt="3" />
                                </div>
                            </Slider>
                        </div>
                    </styled.Container>
                </ScrollAnimation>
            </div>
        </div>
    );
};

export default Header;

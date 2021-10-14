import React from 'react';
import Language from '@components/language';
import styled from './WeGotCovered.style';
import ScrollAnimation from 'react-animate-on-scroll';

const Header = (props) => {
    const { t } = props.useTranslation('common');

    return (
        <styled.Container className="py-46 mt-24">
            <div className="xl:w-3/5 mx-auto flex flex-col justify-between items-center">
                <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-4 my-24 px-6 xl:p-0">
                    <div>
                        <ScrollAnimation animateIn="animate__bounceInDown uppercase" animateOnce>
                            <styled.Title className="font-bold m-0">{t('got_you')}</styled.Title>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="animate__bounceInDown uppercase" animateOnce>
                            <styled.Subtitle className="font-bold m-0">{t('covered')}</styled.Subtitle>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="animate__bounceInDown" animateOnce>
                            <styled.P className="text-xs my-6 text-justify">{t('when_buying')}</styled.P>
                            <styled.P className="text-xs my-6 text-justify">{t('we_cover_cabos')}</styled.P>
                        </ScrollAnimation>
                    </div>
                    <div className="flex flex-col justify-center items-center px-6">
                        <ScrollAnimation animateIn="animate__bounceInRight" animateOnce>
                            <div className="flex items-center">
                                <styled.Icon alt="home" src="/assets/images/home.png" />
                                <div>
                                    <styled.Count>+700</styled.Count>
                                    <styled.Desc>{t('real_states')}</styled.Desc>
                                    <styled.P className="text-xs">{t('have_organized')}</styled.P>
                                </div>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="animate__bounceInRight" animateOnce>
                            <div className="flex items-center">
                                <styled.Icon alt="home" src="/assets/images/bank.png" />
                                <div>
                                    <styled.Count>+3,000</styled.Count>
                                    <styled.Desc>{t('available_properties')}</styled.Desc>
                                    <styled.P className="text-xs">{t('we_call_ourselves')}</styled.P>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        </styled.Container>
    );
};

export default Header;

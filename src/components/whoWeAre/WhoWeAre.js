import React from 'react';
import Language from '@components/language';
import styled from './WhoWeAre.style';
import ScrollAnimation from 'react-animate-on-scroll';

const Header = (props) => {
    const { t } = props.useTranslation('common');

    return (
        <div id="who-we-are" className="py-46">
            <div className="xl:w-10/12 mx-auto flex flex-col justify-between items-center">
                <div className="w-full grid grid-cols-1 xl:grid-cols-3 gap-4 my-24 px-12 xl:p-0">
                    <div>
                        <ScrollAnimation animateIn="animate__bounceInRight" animateOnce>
                            <styled.Text className="font-bold uppercase">{t('who_we_are')}</styled.Text>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="animate__fadeIn uppercase" animateOnce>
                            <styled.Big>{t('about')} <br/>{t('us')}</styled.Big>
                        </ScrollAnimation>
                    </div>
                    <div className="col-span-2">
                        <ScrollAnimation animateIn="animate__fadeIn" animateOnce>
                            <styled.P className="text-xs text-justify">{t('about_us')}</styled.P>
                        </ScrollAnimation>
                    </div>
                </div>
                <ScrollAnimation animateIn="animate__bounceInRight" animateOnce>
                    <styled.Img src="/assets/images/csl.jpg" style={{height: 350}} alt="csl" />
                </ScrollAnimation>

                <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-4 mt-4 px-6 xl:p-0">
                    <div className="flex justify-center flex-col items-center ">
                        <ScrollAnimation animateIn="animate__bounceInLeft" animateOnce>
                            <div className="flex justify-center flex-col items-center ">
                                <styled.Floating className="-mt-32">
                                    {t('nowadays')}
                                </styled.Floating>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="animate__bounceInLeft" animateOnce>
                            <styled.P className="text-xs text-justify my-12">{t('nowadays_description')}</styled.P>
                            <styled.Img src="/assets/images/baja-california.jpeg" style={{  }} alt="csl" />
                        </ScrollAnimation>
                    </div>
                    <div className="pl-0 xl:pl-24">
                        <ScrollAnimation animateIn="animate__bounceInRight" animateOnce>
                            <styled.Img src="/assets/images/bcs.jpeg" style={{ height: 300 }} alt="csl" className="my-4" />
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="animate__bounceInRight" animateOnce>
                            <styled.Img src="/assets/images/malecon.jpg" style={{  }} alt="csl" />
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;

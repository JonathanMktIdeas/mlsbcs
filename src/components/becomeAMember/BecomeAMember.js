import React from 'react';
import Slider from "react-slick";
import Language from '@components/language';
import styled from './BecomeAMember.style';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import ScrollAnimation from 'react-animate-on-scroll';

const Header = (props) => {
    let slider = React.useRef(null);
    const { t } = props.useTranslation('common');

    return (
        <div className="flex flex-col my-24">
            <div className="flex justify-center">
                <div className="w-full xl:w-10/12 px-6 xl:p-0">
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                        <ScrollAnimation animateIn="animate__lightSpeedInRight" animateOnce>
                            <div>
                                <styled.Image src="/assets/images/become.jpg" alt="become" />
                            </div>
                        </ScrollAnimation>

                        <div className="flex flex-col justify-center items-start p-0 xl:p-12">
                            <ScrollAnimation animateIn="animate__lightSpeedInRight" animateOnce>
                                <styled.Title>{t('become_a')}</styled.Title>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="animate__lightSpeedInRight" animateOnce>
                                <styled.Big>{t('member')}</styled.Big>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="animate__lightSpeedInRight" animateOnce>
                                <styled.Small className="font-bold mt-6">{t('thank_you')}</styled.Small>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="animate__lightSpeedInRight" animateOnce>
                                <styled.P className="text-xs font-thin mt-6">{t('become_propietor')}</styled.P>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="animate__lightSpeedInRight" animateOnce>
                                <styled.Button className="mt-8" onClick={() => {
                                    props.history.push('/form');
                                }}>
                                    {t('be_member')}
                                    <ArrowRightAltIcon />
                                </styled.Button>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;

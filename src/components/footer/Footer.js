import React from 'react';
import UserMenu from '@components/userMenu';
import styled from './Footer.style';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { Link } from "react-router-dom";
import service from '@utils/service';
import { useToasts } from 'react-toast-notifications';

const Header = (props) => {
    const { t } = props.useTranslation('common');
    const [newsletter, setNewsletter] = React.useState('');
    const { addToast } = useToasts();

    const subscribe = () => {
        if (newsletter) {
            service('newsletter', null, { email: newsletter }, 'post')
                .then(data => {
                    setNewsletter('');
                    addToast('Subscribed to newsletter', {
                        appearance: 'success',
                        autoDismiss: true,
                    });
                });
        }
    }

    return (
        <styled.Footer>
            <div className="container mx-auto p-4">
                <div className="xl:w-10/12who-we-are mx-auto flex justify-between items-center flex-col">
                    <div className="flex justify-between items-cente w-full">
                        <styled.Title>{t('get_in_touch')}</styled.Title>
                        <styled.Image src="/assets/images/logo_white.png" alt="logo" />
                    </div>
                    <div className="w-full">
                        <div className="grid grid-cols-3 xl:grid-cols-4 gap-4">
                            <div>
                                <p className="text-white font-bold text-lg">{t('phone')}</p>
                                <a href="tel:+526241727022"><p className="text-white">+52 (624) 172-7022</p></a>
                            </div>
                            <div>
                                <p className="text-white font-bold text-lg">{t('email')}</p>
                                <a href="mailto:admin@mlsbcs.com.mx"><p className="text-white">admin@mlsbcs.com.mx</p></a>
                            </div>
                            <div>
                                <p className="text-white font-bold text-lg">{t('resources')}</p>
                                <a download href="/assets/resources.zip"><img src="/assets/images/download.png" width="20" alt="download" /></a>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mt-8">
                            <div>
                                <p className="text-white text-lg">Carr. Transpeninsular Km. 5</p>
                                <p className="text-white text-lg">Cabo San Lucas, B.C.S</p>
                            </div>
                            <div>
                                <a href="https://www.instagram.com/mlsbcs/"><InstagramIcon className="text-white mr-2" /></a>
                                <a href="https://www.facebook.com/mlsbcsoficial"><FacebookIcon className="text-white mr-2" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full m-12 items-end">
                        <styled.Line />
                        <styled.ButtonUp className="ml-8" onClick={() => {
                            window.scrollTo(0, 0);
                        }}>
                            <ArrowUpwardIcon className="text-white" />
                        </styled.ButtonUp>
                    </div>
                    <div className="w-full">
                        <div className="grid grid-cols-1 xl:grid-cols-8 gap-4">
                            <div className="col-span-1 xl:col-span-6">
                                <div className="flex flex-col xl:flex-row">
                                    <Link className="text-white font-bold text-lg mr-2 p-0 xl:pl-2 border-0 xl:border-l-2 border-white border-solid" to={`/`}>{t('home')}</Link>
                                    <Link className="text-white font-bold text-lg mr-2 p-0 xl:pl-2 border-0 xl:border-l-2 border-white border-solid" to={`/about-us`}>{t('about')}</Link>
                                    <Link className="text-white font-bold text-lg mr-2 p-0 xl:pl-2 border-0 xl:border-l-2 border-white border-solid" to={`/mls-bcs-rules`}>{t('rules')}</Link>
                                    <Link className="text-white font-bold text-lg mr-2 p-0 xl:pl-2 border-0 xl:border-l-2 border-white border-solid" to={`/members`}>{t('members')}</Link>
                                    <Link className="text-white font-bold text-lg mr-2 p-0 xl:pl-2 border-0 xl:border-l-2 border-white border-solid" to={`/service-providers`}>{t('service_providers')}</Link>
                                </div>
                                <div className="flex mt-0 xl:mt-2 flex-col xl:flex-row">
                                    <Link className="text-white font-bold text-lg mr-2 p-0 xl:pl-2 border-0 xl:border-l-2 border-white border-solid" to={`/calendar`}>{t('activities_calendar')}</Link>
                                    <Link className="text-white font-bold text-lg mr-2 p-0 xl:pl-2 border-0 xl:border-l-2 border-white border-solid" to={`/resource-library`}>{t('resource_library')}</Link>
                                    <Link className="text-white font-bold text-lg mr-2 p-0 xl:pl-2 border-0 xl:border-l-2 border-white border-solid" to={`/blog`}>{t('blog')}</Link>
                                    <Link className="text-white font-bold text-lg mr-2 p-0 xl:pl-2 border-0 xl:border-l-2 border-white border-solid" to={`/contact`}>{t('contact')}</Link>
                                </div>
                            </div>
                            <div className="col-span-2 flex flex-col">
                                <p className="text-white font-bold text-md">{t('newsletter')}</p>
                                <p className="text-white text-lg">{t('get_latest')}</p>
                                <input value={newsletter} onChange={e => {
                                    setNewsletter(e.target.value);
                                }} className="mt-2 p-1" type="email" placeholder={t('your_email')} name="email" id="email" />
                                <styled.Button className="mt-2 text-lg font-bold" onClick={subscribe}>
                                    {t('subscribe')}
                                    <ArrowRightAltIcon className="text-white" />
                                </styled.Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </styled.Footer>
    );
};

export default Header;

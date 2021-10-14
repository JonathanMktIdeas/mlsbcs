import React from 'react';
import styled from './Navbar.style';
import { Link } from "react-router-dom";

const Header = (props) => {
    const { t } = props.useTranslation('common');

    return (
        <nav className="nav w-full">
            <div className="container xl:w-10/12 mx-auto">
                <ul className="nav__menu">
                    <li className="nav__menu-item">
                        <Link to={`/`}>
                            {t('home')}
                        </Link>
                        <ul className="nav__submenu">
                            <li className="nav__submenu-item">
                                <Link to={`/#who-we-are`}>
                                    Who we are
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav__menu-item">
                        <Link to={`/about-us`}>{t('about')}</Link>
                        <ul className="nav__submenu">
                            <li className="nav__submenu-item ">
                                <Link to={`/about-us#directors`}>
                                    Board of directors
                                </Link>
                                <Link to={`/about-us#staff`}>
                                    Staff
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav__menu-item">
                        <Link to={`/mls-bcs-rules`}>
                            {t('rules')}
                        </Link>
                    </li>

                    <li className="nav__menu-item">
                        <Link to={`/members`}>{t('members')}</Link>
                        <ul className="nav__submenu">
                            <li className="nav__submenu-item ">
                                <Link to={`/members#directory`}>
                                    Members directory
                                </Link>
                                <Link to={`/members#application`}>
                                    {t('be_member')}
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav__menu-item">
                        <Link to={`/service-providers`}>{t('service_providers')}</Link>
                    </li>
                    <li className="nav__menu-item">
                        <Link to={`/calendar`}>{t('activities_calendar')}</Link>
                    </li>
                    <li className="nav__menu-item">
                        <Link to={`/resource-library`}>{t('resource_library')}</Link>
                    </li>
                    <li className="nav__menu-item">
                        <Link to={`/blog`}>
                            {t('blog')}
                        </Link>
                    </li>
                    <li className="nav__menu-item">
                        <Link to={`/contact`}>
                            {t('contact')}
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;

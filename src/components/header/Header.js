import React from 'react';
import UserMenu from '@components/userMenu';
import styled from './Header.style';
import Burger from '@components/burger';
import { Link } from "react-router-dom";

const Header = (props) => {
    const { t } = props.useTranslation('common');

    return (
        <>
            <styled.Header>
                <div className="xl:w-10/12 mx-auto flex justify-between items-center py-2">
                    <Link to={`/`}>
                        <styled.Image src="/assets/images/logo_blue.png" alt="logo" />
                    </Link>
                    <UserMenu {...props} />
                </div>
                <Burger {...props} />
            </styled.Header>
        </>
    );
};

// <Navbar {...props} />
export default Header;

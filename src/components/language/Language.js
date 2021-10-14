import React from 'react';
import Language from '@components/language';
import styled from './Language.style';

const Header = (props) => {
    const { t, i18n } = props.useTranslation('common');

    return (
        <div className="ml-4">
            <styled.Language className="font-bold px-1 text-base" onClick={() => i18n.changeLanguage('es')}>
                ES
            </styled.Language>
            <styled.Language className="font-bold px-1 text-base" onClick={() => i18n.changeLanguage('en')}>
                EN
            </styled.Language>
        </div>
    );
};

export default Header;

import React from 'react';
import Header from '@components/header';
import Footer from '@components/footer';
import ScrollHandler from '@components/scrollHandler';
import SocialNetwork from '@components/socialNetwork';

const Wrapper = (props) => (
    <main>
        <ScrollHandler />
        <Header {...props} />
        <SocialNetwork />
        {props.children}
        <Footer {...props} />
    </main>
);

export default Wrapper;

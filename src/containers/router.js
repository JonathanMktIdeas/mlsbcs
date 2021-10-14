import React from 'react';
import { Route } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { configureAnchors } from 'react-scrollable-anchor'
import Wrapper from '@containers/wrapper';
import Home from '@containers/home';
import About from '@containers/about';
import Rules from '@containers/rules';
import Members from '@containers/members';
import Kya from '@containers/kya';
import ServiceProviders from '@containers/serviceProviders';
import ArticleResourceFirst from '@containers/articleResourceFirst';
import ArticleResourceSecond from '@containers/articleResourceSecond';
import ArticleResourceThird from '@containers/articleResourceThird';
import ArticleResourceFourth from '@containers/articleResourceFourth';
import ResourceLibrary from '@containers/resourceLibrary';
import Blog from '@containers/blog';
import Contact from '@containers/contact';
import Calendar from '@containers/calendar';
import Pay from '@containers/pay';
import Form from '@containers/form';
import { myself } from '@modules/auth/actions';
import { connect, useDispatch } from 'react-redux'

const HomeContainer = props => (
    <Wrapper {...props}>
        <Home {...props} />
    </Wrapper>
);

const PayContainer = props => (
    <Wrapper {...props}>
        <Pay {...props} />
    </Wrapper>
);

const CalendarContainer = props => (
    <Wrapper {...props}>
        <Calendar {...props} />
    </Wrapper>
);

const FormContainer = props => (
    <Wrapper {...props}>
        <Form {...props} />
    </Wrapper>
);

const ContactContainer = props => (
    <Wrapper {...props}>
        <Contact {...props} />
    </Wrapper>
);

const AboutContainer = props => (
    <Wrapper {...props}>
        <About {...props} />
    </Wrapper>
);

const RulesContainer = props => (
    <Wrapper {...props}>
        <Rules {...props} />
    </Wrapper>
);

const MembersContainer = props => (
    <Wrapper {...props}>
        <Members {...props} />
    </Wrapper>
);

const KyaContainer = props => (
    <Wrapper {...props}>
        <Kya {...props} />
    </Wrapper>
);

const BlogContainer = props => (
    <Wrapper {...props}>
        <Blog {...props} />
    </Wrapper>
);

const ResourceLibraryContainer = props => (
    <Wrapper {...props}>
        <ResourceLibrary {...props} />
    </Wrapper>
);

const ServiceProvidersContainer = props => (
    <Wrapper {...props}>
        <ServiceProviders {...props} />
    </Wrapper>
);

const ArticleResourceFirstContainer = props => (
    <Wrapper {...props}>
        <ArticleResourceFirst {...props} />
    </Wrapper>
);

const ArticleResourceSecondContainer = props => (
    <Wrapper {...props}>
        <ArticleResourceSecond {...props} />
    </Wrapper>
);

const ArticleResourceThirdContainer = props => (
    <Wrapper {...props}>
        <ArticleResourceThird {...props} />
    </Wrapper>
);

const ArticleResourceFourthContainer = props => (
    <Wrapper {...props}>
        <ArticleResourceFourth {...props} />
    </Wrapper>
);

const Router = (props) => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        if (props.auth.token) {
            dispatch(myself());
        }
    }, [props.auth.token])

    configureAnchors({offset: -60, scrollDuration: 200, keepLastAnchorHash: true});

    // const me = (token) => {
    //     props.myself(token);
    // };
    //
    // React.useEffect(() => {
    //     if (props.auth.token) {
    //         me(props.auth.token);
    //     }
    // }, [props.auth.token]);

    return (
        <main>
            <Route exact path="/" component={(routeProps) => <HomeContainer {...props} {...routeProps} useTranslation={useTranslation} />} />
            <Route exact path="/about-us" component={(routeProps) => <AboutContainer {...props} {...routeProps} useTranslation={useTranslation} />} />
            <Route exact path="/mls-bcs-rules" component={(routeProps) => <RulesContainer {...props} {...routeProps} useTranslation={useTranslation} />} />
            <Route exact path="/members" component={(routeProps) => <MembersContainer {...props} {...routeProps} useTranslation={useTranslation} />} />
            <Route exact path="/service-providers" component={(routeProps) => <ServiceProvidersContainer {...props} {...routeProps} useTranslation={useTranslation} />} />
            <Route exact path="/resource-library" component={(routeProps) => <ResourceLibraryContainer {...props} {...routeProps} useTranslation={useTranslation} />} />
            <Route exact path="/the-2021-real-estate-market-predictions-for-the-final-quarter" component={(routeProps) => <ArticleResourceFirstContainer {...props} {...routeProps} useTranslation={useTranslation} />} />
            <Route exact path="/what-to-expect-in-the-2022-housing-market" component={(routeProps) => <ArticleResourceSecondContainer {...props} {...routeProps} useTranslation={useTranslation} />} />
            <Route exact path="/whats-propelling-the-value-of-real-estate-in-mexico" component={(routeProps) => <ArticleResourceThirdContainer {...props} {...routeProps} useTranslation={useTranslation} />} />
            <Route exact path="/second-homes-purchases-energize-the-mexican-real-estate-sector" component={(routeProps) => <ArticleResourceFourthContainer {...props} {...routeProps} useTranslation={useTranslation} />} />
            <Route exact path="/blog" component={(routeProps) => <BlogContainer {...props} {...routeProps} useTranslation={useTranslation} />} />
            <Route exact path="/contact" component={(routeProps) => <ContactContainer {...props} {...routeProps} useTranslation={useTranslation} />} />
            <Route exact path="/calendar" component={(routeProps) => <CalendarContainer {...props} {...routeProps} useTranslation={useTranslation} />} />
            <Route exact path="/pay" component={(routeProps) => <PayContainer {...props} {...routeProps} useTranslation={useTranslation} />} />
            <Route exact path="/form" component={(routeProps) => <FormContainer {...props} {...routeProps} useTranslation={useTranslation} />} />
            <Route exact path="/kya" component={(routeProps) => <KyaContainer {...props} {...routeProps} useTranslation={useTranslation} />} />
        </main>
    );
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

const mapDispatchToProps = {
    myself,
};

export default connect(mapStateToProps, mapDispatchToProps)(Router);
// export default Router;

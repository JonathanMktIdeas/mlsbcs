import React from 'react';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from './Home.style';
import AboutUs from '@components/about';
import Banners from '@components/banners';
import ScrollableAnchor from 'react-scrollable-anchor'
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '@modules/counter/actions';
import ReactPlayer from 'react-player';

const Home = props => {
    const { t } = props.useTranslation('common');
    return (
      <div style={{ paddingTop: 110 }}>
        <div style={{ background: '#2c2c2c' }}>
            <ReactPlayer className="mx-auto" url="/assets/videos/mls.mp4" height="100%" width="100%" loop playing pip controls playsinline muted />
        </div>
        <AboutUs {...props} />
      </div>
  );
};

const mapStateToProps = ({ counter }) => ({
  count: counter.count,
  isIncrementing: counter.isIncrementing,
  isDecrementing: counter.isDecrementing
})

// <Banners history={props.history} useTranslation={props.useTranslation} banners={[
// {Image: '/assets/images/banners/1.jpg', Title: t('our_goals')},
// {Image: '/assets/images/banners/2.jpg', Title: t('your_key')},
// {Image: '/assets/images/banners/3.jpeg', Title: t('we_provide')},
// {Image: '/assets/images/banners/4.jpeg', Title: t('baja_sur')},
// {Image: '/assets/images/banners/5.jpg', Title: t('mlsbcs_is')},
// {Image: '/assets/images/banners/6.jpeg', Title: t('better_together')},
// {Image: '/assets/images/banners/7.jpeg', Title: t('our_internal')},
// {Image: '/assets/images/banners/8.jpg', Title: t('move_yours')},
// {Image: '/assets/images/banners/9.jpg', Title: t('how_to_become')},
// {Image: '/assets/images/banners/10.jpeg', Title: t('it_needs')},
// {Image: '/assets/images/banners/11.jpeg', Title: t('skillfull')},
// ]} />

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  changePage: () => push('/about-us')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

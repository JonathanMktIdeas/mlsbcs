import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ReactPlayer from 'react-player';

const Image = styled.img`
    max-height: 900px;
    height: 95vh;
    object-fit: cover;

    @media(max-width: 890px) {
        height: 80vh;
    }
`;

const Button = styled.button`
    background: #fb7c44;
    color: white;
    text-transform: uppercase;
    font-size: 23px;
    padding: 10px 20px;
    font-family: 'balboa';
    font-weight: 600;
`;


const Banners = ({ banners, prevArrow, nextArrow, useTranslation, history }) => {
    const { t } = useTranslation('common');
    return (
        <Carousel
            showIndicators={false}
            stopOnHover={false}
            showThumbs={false}
            showStatus={false}
            autoPlay
            swipeable
            transitionTime={800}
            interval={6000}
            infiniteLoop
        >
            {banners.map((banner, index) => banner.type === 'video' ? (
                <div key={index}>
                    <ReactPlayer url={banner.Video} />
                </div>
            ) : (
                <div key={index}>
                    <Image src={banner.Image} alt={banner.Title} />
                    <div className="container banner-body">
                        <p className="banner-title">
                            {banner.Title}
                        </p>
                        <Button onClick={() => {
                            history.push('/form');
                        }}>
                            {t('be_member')}
                        </Button>
                    </div>
                </div>
            ))}
        </Carousel>
    );
};
// const mapStateToProps = (state) => ({
//     prevArrow: state.config.configuration ? state.config.configuration.Home.Arrows.leftWhite : null,
//     nextArrow: state.config.configuration ? state.config.configuration.Home.Arrows.rightWhite : null,
// });
//
// export default connect(mapStateToProps)(Banners);
export default Banners;

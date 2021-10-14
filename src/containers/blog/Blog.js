import React from 'react';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import styled from './Blog.style';
import { connect } from 'react-redux';
import Slider from "react-slick";
import BlogCard from "@components/blogCard";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import AddIcon from '@material-ui/icons/Add';
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '@modules/counter/actions';
const settings = {
    dots: false,
    infinite: false,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ],
};

const Members = props => {
    const { t } = props.useTranslation('common');
    let slider = React.useRef(null);

    return (
        <div>
            <styled.Banner className="flex justify-center items-center">
                <styled.Shadow className="text-6xl text-white font-bold uppercase">{t('blog')}</styled.Shadow>
            </styled.Banner>
            <div className="w-full xl:w-4/5 mx-auto grid grid-cols-1 xl:grid-cols-3 gap-4">
                <div className="w-full px-12 border-0 xl:border-r-2 my-12 col-span-1">
                    <div className="w-full mx-auto my-12">
                        <styled.Title className="font-bold">{t('from_the')}</styled.Title>
                        <styled.Subtitle className="font-bold">{t('blog')}</styled.Subtitle>
                    </div>
                    <div className="w-2/3">
                        <p className="font-bold mb-2">{t('blog_categories')}</p>
                        <p className="cat p-1 text-md font-bold active flex items-center justify-evenly">
                            {t('add_new')}
                            <AddIcon />
                        </p>
                        <p className="cat ml-2 p-1 text-base">Training</p>
                        <p className="cat ml-2 p-1 text-base">Real Estate</p>
                        <p className="cat ml-2 p-1 text-base">Technologies</p>
                        <p className="cat ml-2 p-1 text-base">Trends</p>
                        <p className="cat ml-2 p-1 text-base">Articles</p>
                        <p className="cat ml-2 p-1 text-base">Events</p>
                        <p className="cat ml-2 p-1 text-base">Lifestyle La Paz</p>
                        <p className="cat ml-2 p-1 text-base">Lifestyle Todos Santos</p>
                        <p className="cat ml-2 p-1 text-base">Lifestyle Los Cabo</p>
                        <p className="cat ml-2 p-1 text-base">Real Estate Market</p>
                        <p className="cat ml-2 p-1 text-base">Industry</p>
                    </div>
                    <div className="mx-auto pb-24 mt-12">
                        <styled.Title className="font-bold mb-8">RECENT POST</styled.Title>
                        <div className="grid grid-cols-1 gap-4">
                            <BlogCard
                                title="Real estate in the time of a pandemic"
                                image="/assets/images/b1.jpeg"
                                mini
                            />
                        </div>
                    </div>
                </div>
                <div className="container mx-auto pb-24 col-span-2">
                    <div className="grid grid-cols-1 gap-4">
                        <BlogCard
                            title="Real estate in the time of a pandemic"
                            description="Historically, Baja California Sur has proven to be a united and resilient state, capable of continually adapting to the different conditions and challenges it faces. Recent events have been no exception: despite the strains caused by COVID-19, travelers from the United States and other major Mexican cities sought respite on its shores during the summer. Many chose to study and work from the comfort of their beachside abodes, enjoying corporate life in gated communities with an ocean view, a tennis court, and a golf course within reach. While summer is relatively quiet, vacation rental sales grew significantly in August, lasting until December, as people preferred to spend the holiday season in the sunshine of Los Cabos. Los Cabos is considered an elite world-class destination. To prevent the current situation from significantly affecting its status and economy, the destination’s tourism entrepreneurs worked together to implement strict safety measures and protocols to protect the health of both its inhabitants and visitors. It was due to this effort that the real estate market continued to grow despite the health emergency. The construction of multiple housing and larger hotel developments remains stable, which will increase the accommodation supply to meet the high demand of the destination."
                            image="/assets/images/b1.jpeg"
                        />
                        <BlogCard
                            title=""
                            description="Los Cabos has unparalleled potential for the real estate market. Roughly speaking, the cost of a square meter of construction is around three thousand dollars, and about 15% of real estate operating expenses are over a million dollars. Hence, property prices can go up to two million dollars, on average. Moreover, the value of resale properties increases annually between 10% and 20%, and the worth of pre-built properties grows between 20% and 30% after two years. According to the Mexican Secretariat of Tourism, Los Cabos is one of the leading destinations for foreign direct investment in hotel infrastructure, restaurants, and services. Todos Santos also increased its activity in the market, with pending sales surpassing one million dollars. Properties with fruit orchards, plenty of room to walk around, and high-speed WiFi were in high demand. La Paz, in turn, saw an uptick in sales and high-end rentals, especially of properties located in Playa de La Paz and Puerta Cortes. In other markets around the world, the price of houses soared in the second quarter of the year, despite the great economic impact caused by the health emergency. According to the analysis conducted by the Global Property Guide, Mexico ranks fifteenth worldwide - first in Latin America - in the rise of home values. The adverse context caused by the pandemic didn’t stop the eort to connect the three main tourist destinations of the entity with important cities in the United States, a country that is still the main source of visitors to the state. This work resulted in the opening of flights from Loreto and La Paz to Phoenix, Arizona, and Dallas, in addition to a flight between Los Cabos and New York, all operated by American Airlines. Thanks to its unstoppable hotel industry, its sophisticated real estate market, and the increase in the number and diversity of flights, Baja California Sur could be the destination with the fastest economic recovery compared to the rest of Latin America’s tourist destinations."
                            withBorder={false}
                            phone="+624 180 2948"
                            email="cabokid98@aol.com"
                            image="/assets/images/b2.jpeg"
                        />
                    </div>
                    <div className="w-full flex justify-end">
                        <styled.Button className="mt-8">
                            {t('next')}
                            <ArrowRightAltIcon />
                        </styled.Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = ({ counter }) => ({
  count: counter.count,
  isIncrementing: counter.isIncrementing,
  isDecrementing: counter.isDecrementing
})

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  changePage: () => push('/')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Members)

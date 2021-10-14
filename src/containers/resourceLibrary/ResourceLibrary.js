import React from 'react';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import styled from './ResourceLibrary.style';
import { connect } from 'react-redux';
import Slider from "react-slick";
import ResourceCard from "@components/resourceCard";
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
    slidesToScroll: 1
};

const Members = props => {
    const { t } = props.useTranslation('common');
    let slider = React.useRef(null);

    return (
        <div>
            <styled.Banner className="flex justify-center items-center">
                <styled.Shadow className="text-6xl text-white font-bold uppercase">{t('resource_library')}</styled.Shadow>
            </styled.Banner>
            <div className="w-full xl:w-2/3 mx-auto grid grid-cols-4 gap-4 mt-24">
                <div className="container mx-auto pb-24 col-span-4">
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                    <ResourceCard
                            name="The 2021 Real Estate Market: Predictions For The Final Quarter"
                            description="Over half of buyers (64%) think it is now a bad time to buy. By contrast, an even higher percentage of sellers (77%) think it is a great time to sell. But are the nation's sellers and buyers right — is it really a bad time to buy and a great time to sell? And if they are right, what is likely to happen to the real estate market in the final quarter of 2021?"
                            withBorder={false}
                            phone="+562 310 3045"
                            email="info@loscabosrealstate.com"
                            image="/assets/images/resource_library1.jpg"
                            link="the-2021-real-estate-market-predictions-for-the-final-quarter"
                        />
                        <ResourceCard
                            name="What to expect in the 2022 housing market"
                            description="Prices in 2021 have been skyrocketing, competition has been hotter than ever, and the low supply of homes ensured that many homebuyers were (and still are) paying top dollar, all while mortgage rates sat near rock bottom. While the housing market is still hot, there are signs that it’s beginning to cool off, with housing inventory (the number of homes on the market) starting to “meaningfully recover,” per an Aug. 23 monthly report from Zillow. Translation: More homes on the market means more options for buyers and, likely, less competition per home."
                            withBorder={false}
                            phone="+624 180 2948"
                            email="cabokid98@aol.com"
                            image="/assets/images/resource_library2.jpg"
                            link="what-to-expect-in-the-2022-housing-market"
                        />
                        <ResourceCard
                            name="What’s Propelling the Value of Real Estate in Mexico?"
                            description="Property prices have been rising steadily in Mexico over the last decade—driven by a range of forces including the country’s stable macro-economics, foreign residents moving here and buying property for retirement, and the emergence of residential mortgages offered by Mexican banks making home ownership a possibility for the growing Mexican middle-class."
                            withBorder={false}
                            phone="+866 509 4657"
                            email="info@globalmortgage.mx"
                            image="/assets/images/resource_library3.jpg"
                            link="whats-propelling-the-value-of-real-estate-in-mexico"
                        />
                        <ResourceCard
                            name="Second homes purchases energize the Mexican real estate sector"
                            description="Homes on the beach and northern border areas are preferred for acquiring vacation property. 
                            Beach, colonial, or nature-contact vacation destinations have become popular for people seeking to acquire a second residence, due to the pandemic situation that has been experienced for more than a year and the flexibility of work."
                            withBorder={false}
                            phone="+624 143 4838"
                            email="rominaruiz@correduria9bcs.com"
                            image="/assets/images/resource_library4.jpg"
                            link="second-homes-purchases-energize-the-mexican-real-estate-sector"
                        />
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

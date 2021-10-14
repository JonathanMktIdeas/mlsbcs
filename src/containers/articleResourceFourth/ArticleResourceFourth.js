import React from 'react';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import styled from './ArticleResourceFourth.style';
import { connect } from 'react-redux';
import Slider from "react-slick";
import ResourceCard from "@components/resourceCard";
import BlogCard from "@components/blogCard";
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
                <styled.Shadow className="text-6xl text-white font-bold uppercase"></styled.Shadow>
            </styled.Banner>
            <div className="justify-center items-center container xl:w-3/4 mx-auto">
                <div className="container mx-auto pb-24 col-span-2">
                    <styled.Img src="/assets/images/resource_library4.jpg" className="mb-8"/>
                        
                    <styled.Subtitle className="justify-center text-center mb-8">
                        Second homes purchases energize the Mexican real estate sector 
                    </styled.Subtitle>
                    <styled.Small className="mb-8">
                        Homes on the beach and northern border areas are preferred for acquiring vacation property, Newmark says.
                        Beach, colonial, or nature-contact vacation destinations have become popular for people seeking to acquire a
                        second residence, due to the pandemic situation that has been experienced for more than a year and the
                        flexibility of work, explains the Newmark real estate company.
                    </styled.Small>
                    <styled.Small className="mb-8">
                        “As a result of the health situation, sales of vacation homes have increased in a disruptive and contrasting way
                        to the conditions that prevail in most sectors and industries of the world economy,” said the company.
                        The companies that have made these purchases are those who have remained economically stable despite
                        the pandemic and their solvency allows them to invest in additional assets.
                    </styled.Small>
                    <styled.Small className="mb-8">
                        The purchase of a house, seen as a more solid investment in the face of the uncertainty of the development of
                        the pandemic, has also pushed the decision.
                    </styled.Small>
                    <styled.Small className="mb-8">
                        “Real estate advisory agencies that refer to the purchase operation as an investment that can generate returns
                        by incorporating it into lodging operation schemes such as the platforms that exist in the market today, have
                        been points that have driven the acquisition of second homes or vacation ”, explained Pedro Delgado Beltrán,
                        director of Hospitality for Newmark Mexico and Latin America.
                    </styled.Small>
                    <styled.Small className="mb-8">
                        Some in the market for a second home are looking south of the U.S. border; Mexico is seeing growth in the
                        second home market as travel restrictions ease and more people get vaccinated.
                    </styled.Small>
                    <styled.Small className="mb-8">
                        In La Paz saw a 33% increase since June 2020, according to broker Victor Granados. “Clients who wanted to
                        wait a year or two are doing it now,” he said of buyers.
                    </styled.Small>
                    <styled.Small className="mb-8">
                        There’s an urgency among the buyers, experts note. “I was surprised by the number of people who are looking
                        for beachfront property,” said Laura Zapata, a real estate agent in the Puerto Morelos area. “Maybe being in a
                        lockdown they are saying, ‘I’ve gotta do this, and I’ve got to do it now so I can enjoy my life.’ ”
                    </styled.Small>
                    <styled.Small className="mb-8">
                        In addition to beach towns like Mazatlan, Puerto Morelos, La Paz, Puerto Vallarta, San Jose del Cabo, Tulum,
                        and Playa del Carmen, many foreigners choose to purchase second homes in Colonial-era cities like
                        Queretaro and Merida.
                    </styled.Small>
                    <styled.SmallTitle className="mb-8">
                        Source: mexicodailypost.com
                    </styled.SmallTitle>
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

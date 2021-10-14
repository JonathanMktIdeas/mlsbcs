import React from 'react';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import styled from './ArticleResourceFirst.style';
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
                    <styled.Img src="/assets/images/resource_library1.jpg" className="mb-8"/>

                    <styled.Subtitle className="justify-center text-center mb-8">
                        The 2021 Real Estate Market: Predictions For The Final Quarter 
                    </styled.Subtitle>
                    <styled.Small className="mb-8">
                    Over half of buyers (64%) think it is now a bad time to buy. By contrast, an even higher percentage of sellers (77%) think it is a great time to sell. But are the nation's sellers and buyers right — is it really a bad time to buy and a great time to sell? And if they are right, what is likely to happen to the real estate market in the final quarter of 2021?
                    </styled.Small>
                    <styled.SmallTitle className="mb-8">
                    Bad Time To Buy, Good Time To Sell? It's Not So Simple
                    </styled.SmallTitle>
                    <styled.Small className="mb-8">
                        On the buyer side, there are many reasons to be wary about buying at this time. In addition to the cost (some
                        economists have suggested that home prices are currently inflated by15% to 20%), inventory is low and
                        competition is fierce. Still, these factors shouldn't necessarily hold buyers back. It may still be a great time to
                        enter the market for anyone who was already planning to buy and financially ready to do so.
                    </styled.Small>
                    <styled.Small className="mb-8">
                        On the seller side, there is no question that the past year has offered many opportunities. Given the shortage
                        of inventory in most regions of the country and the high demand for homes, many rural and suburban
                        homeowners continue to realize phenomenal returns on their properties. In some small towns, prices have
                        soared up to 25%.
                    </styled.Small>
                    <styled.Small className="mb-8">
                        Three key factors are fueling the current low inventory and high demand for homes, especially in rural and
                        suburban areas. First, even before the pandemic, many millennial families were already leaving cramped
                        quarters in urban areas for suburban and rural locales. Secondly, remote work, which seems here to stay, is
                        expanding where people can live. Finally, buyers who may have once preferred to invest in a new home are
                        increasingly looking at resale options as supply-chain problems continue to hamper the ability of developers to
                        complete projects.
                    </styled.Small>
                    <styled.Small className="mb-8">
                        Given the potential to turn a huge profit on one's home, owners certainly have many reasons to sell at this time,
                        but there's a catch. Unless you're moving to a market that isn't currently suffering from shortages or you're
                        planning to downsize (e.g., to sell a large suburban home to move into an urban condo), finding a new home
                        may prove difficult and costly. So, is it a good time to sell? Yes, but likely only if you're committed to radically
                        changing your own living situation. Selling your current home with the hopes of landing a great deal on a similar
                        or larger home in the same community may backfire. 
                    </styled.Small>
                    <styled.SmallTitle className="mb-8">
                        Predictions For The Final Quarter
                    </styled.SmallTitle>
                    <styled.Small className="mb-8">
                        With so many sellers under the impression that this is a great time to sell, it seems likely that more sellers will
                        come out of the woodwork over the coming months. After all, why not see how much you can get for your home
                        in today's hot market, even if you weren't planning to sell? If more sellers do come forward, this should result
                        in an overdue market correction, eventually bringing home prices closer in line with current home values.
                        But what if the buyers don't return? There is a small chance that even as inventory increases, buyers will
                        remain wary. In this case, we could see an overcorrection of the market. However, given the current demand
                        for homes and the ongoing supply-chain challenges facing developers, an overcorrection seems unlikely.
                        All things considered, my prediction for the final few months of 2021 is that that market will remain hot but
                        adjust to become slightly more buyer-friendly, creating great opportunities for sellers and buyers alike as we
                        look ahead to 2022.
                    </styled.Small>
                    <styled.SmallTitle className="mb-8">
                        Source: forbes.com
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

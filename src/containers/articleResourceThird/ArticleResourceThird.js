import React from 'react';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import styled from './ArticleResourceThird.style';
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
                    <styled.Img src="/assets/images/resource_library3.jpg" className="mb-8"/>
                        
                    <styled.Subtitle className="justify-center text-center mb-8">
                        What’s Propelling the Value of Real Estate in Mexico? 
                    </styled.Subtitle>
                    <styled.Small className="mb-8">
                        Property prices have been rising steadily in Mexico over the last decade—driven by a range of forces including
                        the country’s stable macro-economics, foreign residents moving here and buying property for retirement, and
                        the emergence of residential mortgages offered by Mexican banks making home ownership a possibility for the
                        growing Mexican middle-class.
                    </styled.Small>
                    <styled.SmallTitle className="mb-8">
                        Realty markets are localized in Mexico
                    </styled.SmallTitle>
                    <styled.Small className="mb-8">
                        Mexico is a vast country with wide regional variations in lifestyle, typography, climate, infrastructure, transport
                        links, and local amenities. This means that the country’s real estate markets are highly localized, and accurate
                        data in regard to prices and historical trends is not easy find in aggregate as it is in the US, Canada and
                        Europe.
                    </styled.Small>
                    <styled.SmallTitle className="mb-8">
                        Web portals give insights, but not detailed data
                    </styled.SmallTitle>
                    <styled.Small className="mb-8">
                        In recent years, a series of web portals have emerged which aggregate property listings nationally:
                        MetrosCubicos, VivaAnuncios and InMuebles24 are the principal ones to review.
                    </styled.Small>
                    <styled.Small className="mb-8">
                        These sites are helping to bring additional data together for buyers and sellers, but remember that asking
                        prices and sale prices are rarely the same. (Real estate agents tell us that closing prices on property here are
                        generally between 10 and 15 per cent lower than market asking prices, depending on the location, state of the
                        property, as well as individuals’ situations surrounding the transaction.)
                    </styled.Small>
                    <styled.SmallTitle className="mb-8">
                        House price data is not centralized
                    </styled.SmallTitle>
                    <styled.Small className="mb-8">
                        There is no publicly-accessible ‘official’ central register of house prices in Mexico, and even some of the
                        ‘informal’ registers which exist may peddle doubtful data, as sellers are not always forthcoming about the full
                        details concerning the prices at which properties changed hands.
                    </styled.Small>
                    <styled.Small className="mb-8">
                        Official registers do exist —on records at local government and Notary Public offices— but getting access to
                        these data is tricky, and generally has to be undertaken in-person on state-by-state (or even municipality)
                        basis, making it near-impossible for any individual to build a precise picture of what is trending regionally or
                        nationally.
                    </styled.Small>
                    <styled.Small className="mb-8">
                        Note also, that untitled properties sold on agrarian terms won’t appear in most statistics, and the buyers’ pool
                        in this market is smaller because these properties cannot be financed or used for collateral.
                        Some private firms and government agencies exist that commission data-gathering exercises and compile
                        reports based on those data. The depth and scope of their data may be limited, but they add perspective and
                        insights for potential buyers.
                    </styled.Small>
                    <styled.SmallTitle className="mb-8">
                        Other sources of house price data in Mexico
                    </styled.SmallTitle>
                    <styled.Small className="mb-8">
                        In the absence of a central register of prices showing current trends, potential buyers, and sellers seeking to
                        set a price on their property for sale, can repair to a variety of other data sources for guidance.
                    </styled.Small>
                    <styled.SmallRight className="">
                        Local real estate agents
                    </styled.SmallRight>
                    <styled.Small className="mb-8">
                        Locally based, and well-established realty agents are among the better people to talk to for an indication of
                        prices in a given market. The good ones will have been operating in the market for some while and will have
                        a good perspective about the price levels similar houses in specific local neighborhoods have been listed at
                        and sold for.
                    </styled.Small>
                    <styled.Small className="mb-8">
                        The disadvantage of this information source is that agents are inevitably vested in talking-up the price of the
                        product they sell; some agents may represent the buyer and the seller simultaneously (this is not illegal in
                        Mexico as it is in some US states) and so it’s prudent for buyers especially to check other information sources
                        to cross-check price levels. You can learn more about this on our comprehensive free eBook guide to working
                        with realty agents in Mexico.
                    </styled.Small>
                    <styled.SmallRight className="">
                        Live locally for a while, and get a feel for the market
                    </styled.SmallRight>
                    <styled.Small className="mb-8">
                        An excellent way to gauge local prices is to base yourself locally for a while (see also: renting) in the area
                        where you are interested in investing. There is no substitute for getting to know the locale, talking to the locals,
                        and probing friends and local contacts about recent market activity, scoping-out the different neighborhoods,
                        and in doing so obtaining a first-hand sense of the local market.
                    </styled.Small>
                    <styled.Small className="mb-8">
                        Doing this can also help you to negotiate a better price: foreigners can be seen to overpay for property in
                        Mexico by assessing ‘value’ to prices in relation to their home-country instead of in relation to local market
                        characteristics and conditions.
                    </styled.Small>
                    <styled.SmallRight className="">
                        Hire a property assessor
                    </styled.SmallRight>
                    <styled.Small className="mb-8">
                        Homeowners in Mexico can hire the services of a property assessor —a valuation agent— who, for a fee of
                        around US$150-$300 will compose a detailed valuation report that will be founded on an array of factors
                        including research of recent sale prices in the area, the desirability of the locality, amenities the property offers,
                        as well as the size and condition of the current land and construction.
                    </styled.Small>
                    <styled.Small className="mb-8">
                        Sellers use this report as supporting evidence for their asking price —and some sellers might assert that the
                        valuation is Gospel— but these valuations constitute a professional opinion, not a buyer’s tangible offer.
                    </styled.Small>
                    <styled.SmallTitle className="mb-8">
                        Offers and direct negotiation are key tools
                    </styled.SmallTitle>
                    <styled.Small className="mb-8">
                        While various disconnected data sources exist to help sellers and buyers gauge the present market value for
                        real estate, the price of a piece of land or a property in Mexico is most-often determined somewhere between
                        “what the current owner is willing to accept” and “what a buyer is willing to pay.”
                    </styled.Small>
                    <styled.SmallRight className="">
                        Cash buyers have leverage
                    </styled.SmallRight>
                    <styled.Small className="mb-8">
                        Most foreigners who have been purchasing real estate in Mexico over the years have purchased using cash,
                        by trading down from —or out of— property markets in their home countries and exchanging these for a home
                        in Mexico, oftentimes as part of a retirement plan. This form of direct capital investment has provided an
                        additional support mechanism for the residential property market here, and with buyers not subject to the usual
                        pressures of property repayment schedules and interest charges, the market can remain stable even as prices
                        soften or fall.
                    </styled.Small>
                    <styled.SmallRight className="">
                        Serious interest deserves an offer
                    </styled.SmallRight>
                    <styled.Small className="mb-8">
                        The asking price is almost always negotiable, except in very buoyant periods where buyers outstrip sellers. If
                        you are seriously interested in a property you have viewed, then you should make an offer based on your
                        research and intuition.
                    </styled.Small>
                    <styled.Small className="mb-8">
                        Experienced local agents tell us that “the most important thing is to make an offer:” and that sometimes low-ball
                        offers are rejected without further discussion; and sometimes the sellers engage. We’re told that sometimes
                        relatively-high asking price offers are accepted by buyers without negotiation, and conversely some
                        exceptionally low-ball offers are immediately accepted by sellers.
                    </styled.Small>
                    <styled.Small className="mb-8">
                        The negotiations tend to ride on the underlying reasons current owners may have for selling which may never
                        become apparent to the buyer but which influence the negotiations and the price sellers are willing to accept;
                        as well underlying reasons buyers might have that can include things like an emotional feeling they encounter
                        in relation to a property they have viewed, or a hurried moving schedule.
                    </styled.Small>
                    <styled.SmallRight className="">
                        Some homes are over priced
                    </styled.SmallRight>
                    <styled.Small className="mb-8">
                        By contrast, some homes are simply over-priced with owners quite unwilling to budge or negotiate on the
                        matter; and they often appear in no hurry to sell. Some homes stay on the market for many years when current
                        owners hold a firm belief that the value of the property is far higher than buyers are willing to pay; thus an
                        impasse is created. In these situations it’s best for potential buyers to consider alternative homes and ‘move
                        on’ from any notions they have about owning an over priced property held by an unyielding seller.
                    </styled.Small>
                    <styled.SmallTitle className="mb-8">
                        Price trends and lifestyle priorities
                    </styled.SmallTitle>
                    <styled.Small className="mb-8">
                        The palpable buoyancy in Mexico’s current property markets doesn’t show any immediate signs of abating,
                        although future prices will ultimately be determined by the same factors which are driving the current trend
                        —primarily capital flows and demographics, although other macro events can also cause price swings— and
                        no one can justly predict how markets will shift and reform in years to come.
                    </styled.Small>
                    <styled.SmallRight className="">
                        Price buoyancy continues in popular places
                    </styled.SmallRight>
                    <styled.Small className="mb-8">
                        Popular places like southern Baja California, Puerto Vallarta, and the Riviera Maya are continuing to
                        experience high demand as Americans look south for beachfront property of the type that has become
                        unaffordable in the US to all except the ultra-wealthy.
                    </styled.Small>
                    <styled.Small className="mb-8">
                        Foreign residents are also turning their attention inland, beyond the coasts to highland colonial cities where the
                        year-round climate is temperate and improving transport links and local amenities increase the appeal of these
                        locations. This is driving demand (and raising prices) in lesser-known towns and cities which hitherto
                        experienced relatively low house price inflation: among these are San Miguel de Allende, Querétaro,
                        Guanajuato, Valle de Bravo, Puebla, Tepoztlán, Pátzcuaro, and Mérida.
                    </styled.Small>
                    <styled.SmallRight className="">
                        Reviewing your true lifestyle needs
                    </styled.SmallRight>
                    <styled.Small className="mb-8">
                        As the capital cost of acquiring property increases, we recommend you consider your lifestyle needs as you
                        scout for a place to live and especially when you invest in a home in Mexico. The advice in that article shares
                        some significant insights about the types of areas which are likely to continue benefiting from investor interest;
                        the common threads are: good value for money, the strength of the local community, the location’s character,
                        development potential, and local amenities which people commonly seek when moving to a new place.
                    </styled.Small>
                    <styled.SmallTitle className="mb-8">
                        Total cost of property ownership in Mexico
                    </styled.SmallTitle>
                    <styled.Small className="mb-8">
                        Residential property in Mexico continues to attract buyers from abroad for another reason: the total cost of
                        ownership is lower than it is in the US, Canada or Europe. Lower property taxes (although these have been
                        rising in recent years, albeit from a low base); lower construction costs (but land prices and materials costs
                        have been rising significantly of late); lower ongoing maintenance fees; and a lower cost of living continue to
                        make Mexico an attractive base for making a home investment.
                    </styled.Small>
                    <styled.SmallTitle className="mb-8">
                        Source: mexperience.com
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

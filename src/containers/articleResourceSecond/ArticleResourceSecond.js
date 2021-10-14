import React from 'react';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import styled from './ArticleResourceSecond.style';
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
                    <styled.Img src="/assets/images/resource_library2.jpg" className="mb-8"/>
                        
                    <styled.Subtitle className="justify-center text-center mb-8">
                        What to expect in the 2022 housing market 
                    </styled.Subtitle>
                    <styled.Small className="mb-8">
                        For any homebuyer, novice or weathered, the 2021 housing market has been harrowing to navigate.
                    </styled.Small>
                    <styled.Small className="mb-8">
                        By some experts’ definitions, “this year, [the housing market] decidedly shot way ahead of the economy, to the point where we saw this incredibly overheated market characterized by massive multiple offers, contingency waivers, price escalation clauses, and, in fact, record prices,” George Ratiu, senior economist at realtor.com, tells Fortune.
                    </styled.Small>
                    <styled.Small className="mb-8">
                        Indeed, prices in 2021 have been skyrocketing, competition has been hotter than ever, and the low supply of homes ensured that many homebuyers were (and still are) paying top dollar, all while mortgage rates sat near rock bottom. While the housing market is still hot, there are signs that it’s beginning to cool off, with housing inventory (the number of homes on the market) starting to “meaningfully recover,” per an Aug. 23 monthly report from Zillow. Translation: More homes on the market means more options for buyers and, likely, less competition per home. 
                    </styled.Small>
                    <styled.Small className="mb-8">
                        “Homebuyers next year are going to find a much more normal market,” suggests Ratiu. With some metrics
                        starting to swing in buyers’ favor, what can they expect from the 2022 housing market? Fortune asked real
                        estate experts what trends they see emerging that would-be homeowners should know.
                    </styled.Small>
                    <styled.SmallTitle className="mb-8">
                        Do expect: a (somewhat) more buyer-friendly market
                    </styled.SmallTitle>
                    <styled.Small className="mb-8">
                        It’s been steadfastly a seller’s market this year, and according to some experts, “I would hesitate to ever call a
                        market that we would see this decade a ‘buyer’s market,’” argues Skylar Olsen, a senior director and principal
                        economist at mortgage startup Tomo and a former Zillow economist.
                        But with inventory on the rise from its lows, buyers will likely have more options—and won’t be pitted against
                        one another as much. Housing experts see the tides turning, with the market becoming “friendlier” to buyers,
                        in Olsen’s words.
                    </styled.Small>
                    <styled.Small className="mb-8">
                        That doesn’t mean it won’t still be a “strong” seller’s market, according to Nicole Bachaud, an economic data
                        analyst at Zillow, but it will be “slightly more balanced” next year, she suggests.
                        And according to Ratiu, “mortgage rates and financing in general will remain favorable towards buyers, and
                        coupled with improved inventory, I do see the market skewing more in favor of buyers.”
                    </styled.Small>
                    <styled.SmallTitle className="mb-8">
                        Do expect: more choices on the market
                    </styled.SmallTitle>
                    <styled.Small className="mb-8">
                        Buyers, good news: You’ll likely have more houses to choose from when shopping for your next place.
                        This year’s housing market was characterized by a “hypercompetitive” atmosphere, says Olsen, with inventory
                        (the number of homes available on the market) notching consistent lows. But for the past three months straight
                        (May through July, per realtor.com data), inventory has been rising—“which is something we haven’t seen in a
                        really long time. So that shows us that things are gonna start to balance out a little bit as we move forward,”
                        says Zillow’s Bachaud.
                    </styled.Small>
                    <styled.Small className="mb-8">
                        That all plays into the theme of a more “normal market” that Ratiu and others foresee for next year—one where
                        buyers likely aren’t fighting tooth and nail for the last house on the block.
                    </styled.Small>
                    <styled.Small className="mb-8">
                        “It will probably be a little less stressful for buyers as there are more options” next year, suggests Bachaud.
                        “There’s not going to be 50 offers on one house that we’ve been hearing all these anecdotes about this year.”
                        However, experts don’t believe the rise in inventory will push down home prices—those are still expected to
                        keep rising.
                    </styled.Small>
                    <styled.SmallTitle className="mb-8">
                        Don’t expect: prices to drop
                    </styled.SmallTitle>
                    <styled.Small className="mb-8">
                        Unfortunately, would-be homebuyers, you’ll likely still be paying top dollar for a home next year.
                        For home prices, “we still have really strong growth, really high numbers, and things are still going up, but
                        they’re just starting to slow down a little bit in that progression up,” says Zillow’s Bachaud.
                    </styled.Small>
                    <styled.Small className="mb-8">
                        Recent predictions, like that from CoreLogic, forecast a 3.2% increase in home prices year over year next
                        June; others like Zillow’s Bachaud are predicting they’ll rise as much as 12% year over year in July 2022.
                    </styled.Small>
                    <styled.Small className="mb-8">
                        The key experts are hitting home, though, is that prices will be rising at a slower pace than we saw this year
                        (welcome news, when you think about the year-over-year 18.6% pop in prices this June, per the S&P
                        CoreLogic Case-Shiller national home price index). “Home price appreciation is likely at the peak, and it’s
                        going to start to taper off and come back down towards normal levels,” suggests Bachaud.
                    </styled.Small>
                    <styled.Small className="mb-8">
                        Indeed, already Ratiu notes that by realtor.com’s measurements, we’ve recently seen several weeks of high
                        single-digit price growth (in the 8% to 9% range) compared with the double-digit range witnessed earlier this
                        year. “To me, that’s huge,” he says, “because it tells me buyers are, one: getting more options in terms of
                        housing, and two: finally price growth is coming down from the scorching levels we’ve seen.”
                    </styled.Small>
                    <styled.SmallTitle className="mb-8">
                        Do expect: a more ‘normal’ offer process
                    </styled.SmallTitle>
                    <styled.Small className="mb-8">
                        At this point, most prospective homeowners have likely heard the anecdotes of buyers shelling out far above
                        asking price for a home, feverishly trying to outbid multiple other offers, or even forgoing some inspections to
                        secure a property. But those like realtor.com’s Ratiu see things becoming more temperate in 2022.
                    </styled.Small>
                    <styled.Small className="mb-8">
                        “I would say to expect 2022 to provide a much more balanced, normal landscape,” he suggests. Buyers can
                        also expect to be able to “make offers below asking again. That’s part of what we’ve seen historically; that’s a
                        normal market.”
                    </styled.Small>
                    <styled.Small className="mb-8">
                        While it’s true that around one-third of homebuyers paid more than they were expecting for a home this year,
                        Bachaud points out that “there’s still two-thirds of the market selling at or under list price, so even now there
                        are opportunities for buyers to get a home without getting into a bidding war situation or having to feel
                        stress…to waive inspections or things like that,” she says.
                    </styled.Small>
                    <styled.Small className="mb-8">
                        That’s something Bachaud and Ratiu expect to continue next year, especially as more inventory becomes
                        available to prospective buyers.
                    </styled.Small>
                    <styled.SmallTitle className="mb-8">
                        Don’t expect: mortgage rates to remain at their lows
                    </styled.SmallTitle>
                    <styled.Small className="mb-8">
                        Part of the frenzy of the 2020 and 2021 housing market has been record low mortgage rates that tempted many
                        would-be homeowners to jump at the chance to get a new mortgage (or refinance) while the getting was good.
                        And while experts don’t expect rates to skyrocket from here, they do see mortgage rates rising in 2022. “What
                        we’re expecting is rates to tick back up, not necessarily jump and leap back to, you know, really high numbers,”
                        says Bachaud. Currently, the 30-year fixed mortgage rate is hovering around 2.9%. By the end of next year,
                        mortgage rates could hit nearly 4%, based on Freddie Mac’s forecasts, while realtor.com’s Ratiu sees rates
                        hovering around 3.6% for 2022.
                    </styled.Small>
                    <styled.Small className="mb-8">
                        Apart from rising inflation, with the Federal Reserve signaling it might start tapering its asset purchases by the
                        end of this year, “mortgage backed securities, more importantly, are the main contributor to these incredibly low
                        rates. So I do see as the Fed begins to cut back on some of those purchases, mortgage rates will trend up,”
                        suggests Ratiu. That’s important for homebuyers to think about next year as it will mean higher monthly
                        payments.
                    </styled.Small>
                    <styled.SmallTitle className="mb-8">
                        Do expect: the suburbs to remain hot
                    </styled.SmallTitle>
                    <styled.Small className="mb-8">
                        During the pandemic, many homeowners took the indefinite work-from-home environment as an opportunity to
                        migrate to the suburbs and away from high-priced city centers. Many people are still working from home, and
                        according to housing experts, suburban real estate is likely to remain a hot commodity next year.
                    </styled.Small>
                    <styled.Small className="mb-8">
                        A big part of that is also demographics: namely, the wave of millennials who have been (and will continue)
                        aging into their homebuying years.
                    </styled.Small>
                    <styled.Small className="mb-8">
                        “The millennial generation is now moving into its thirties in really large numbers: 4.8 million this year alone, and
                        another 4.8 million for the next two years,” estimates realtor.com’s Ratiu. “So far what we’re finding as
                        millennials mature, as they have families, they have children, [is that] they are absolutely looking for higher
                        quality of life and good schools, and the suburbs is where most of that attraction lies,” he says.
                    </styled.Small>
                    <styled.Small className="mb-8">
                        “2022 will see the continuation of suburbs attracting large numbers of buyers,” predicts Ratiu. And no matter
                        where they buy, that flood of millennial buyers in the market should keep demand strong, suggests Bachaud.
                        Recently, some of those hottest suburban zip codes, according to an August realtor.com report, include
                        Colorado Springs; Peabody, Mass.; Brentwood, N.C., and Franklin, Tenn., to name a few.
                    </styled.Small>
                    <styled.SmallTitle className="mb-8">
                        Don’t expect: buying a house to become more affordable
                    </styled.SmallTitle>
                    <styled.Small className="mb-8">
                        Though the pace of price appreciation should slow more next year, experts aren’t necessarily predicting it will
                        be more affordable to get a house in 2022.
                    </styled.Small>
                    <styled.Small className="mb-8">
                        “When I look at people’s incomes, especially within the perspective of the last 10, 20 years, they have not kept
                        up with the rate of housing price growth,” notes Ratiu. “Without a significant pickup in wage growth, I see
                        affordability still being a challenge.”
                    </styled.Small>
                    <styled.Small className="mb-8">
                        According to Bachaud’s estimations, “it’s going to be a lot harder to save for a down payment, especially for
                        first-time buyers as prices continue to rise so rapidly. And if mortgage rates do increase, that’s also going to put
                        stress on monthly payments,” she notes. Her suggestion to homebuyers to handle the challenges? Assess
                        your financial situation, talk with a trusted local real estate agent to understand your local market, and, of
                        course, get preapproved for a mortgage.
                    </styled.Small>
                    <styled.Small className="mb-8">
                        However Ratiu suggests that more houses in more approachable price ranges will likely continue hitting the
                        market, which may offer some relief to buyers who were unable to afford much of the inventory in 2021. “Our
                        monthly inventory figures show that smaller homes are being listed in larger numbers,” says Ratiu, which
                        “speaks to a more affordable inventory coming to market.”
                    </styled.Small>
                    <styled.Small className="mb-8">
                        That should give buyers more options at different price points, “which is great for first-time buyers who may not
                        be able to necessarily afford a mid-tier or luxury home, which is a lot of what we’ve been seeing over the past
                        year and a half,” says Bachaud.
                    </styled.Small>
                    <styled.Small className="mb-8">
                        The big takeaway for homebuyers eyeing the market next year: The tides are turning in your favor, but don’t
                        necessarily expect a walk in the park.
                    </styled.Small>
                    <styled.SmallTitle className="mb-8">
                        Source: fortune.com
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

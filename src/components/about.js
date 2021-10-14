import React from 'react';
import WhoWeAre from '@components/whoWeAre';
import WeGotCovered from '@components/weGotCovered';
import TechnologyPowered from '@components/technologyPowered';
//import BecomeAMember from '@components/becomeAMember';

const About = (props) => (
    <>
        <WhoWeAre {...props} />
        <WeGotCovered {...props} />
        <TechnologyPowered {...props} />
     
    </>
);

//<BecomeAMember {...props} />

export default About;

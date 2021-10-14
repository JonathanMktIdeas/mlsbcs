import React from 'react';
import styled from './ResourceCard.style';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const ResourceCard = (props) => (

    <styled.Container className={`w-4/5 flex flex-col justify-center items-start mx-auto p-4 ${!props.withBorder ? 'border-0' : 'border-2'}`}>
        <img src={props.image} alt="profile" />
        <styled.Company>{props.name}</styled.Company>
        <styled.Name>{props.description}</styled.Name>
        <styled.Button className="mt-4">
                <a href={props.link}>Read more</a>
            <ArrowRightAltIcon />
        </styled.Button>
    </styled.Container>
);

ResourceCard.defaultProps = {
    withBorder: true,
};

export default ResourceCard;

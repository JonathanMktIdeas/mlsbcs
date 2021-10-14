import React from 'react';
import styled from './BlogCard.style';

const DirectorCard = (props) => props.mini ? (
    <styled.Container className={`w-full flex flex-col justify-center mx-auto`}>
        <img src={props.image} alt="profile" />
        <styled.CompanyMini>{props.title}</styled.CompanyMini>
    </styled.Container>
) : (
    <styled.Container className={`w-4/5 flex flex-col justify-center mx-auto p-4`}>
        <img src={props.image} alt="profile" />
        <styled.Company>{props.title}</styled.Company>
        <styled.Position>{props.description}</styled.Position>
    </styled.Container>
);

DirectorCard.defaultProps = {
    withBorder: true,
};

export default DirectorCard;

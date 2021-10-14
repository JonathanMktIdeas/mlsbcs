import React from 'react';
import styled from './DirectorCard.style';

const DirectorCard = (props) => props.light ? (
    <styled.Container className="w-4/5 flex flex-col justify-center mx-auto p-4">
        <img style={{ height: 360, objectFit: 'contain' }} src={props.image} alt="profile" />
        <styled.NameLight>{props.name}</styled.NameLight>
        <styled.CompanyLight>{props.company}</styled.CompanyLight>
        <styled.PositionLight>{props.position}</styled.PositionLight>
        <p className="font-bold text-base mt-2 text-white uppercase">{props.t('phone')} <span className="text-base font-normal">{props.phone}</span></p>
        <p className="font-bold text-base text-white uppercase">{props.t('mobile')} <span className="text-base font-normal">{props.mobile}</span></p>
        <p className="font-bold text-base text-white uppercase">{props.t('email')} <span className="text-sm font-normal">{props.email}</span></p>
    </styled.Container>
) : (
    <styled.Container className={`w-4/5 flex flex-col justify-center mx-auto p-4 ${!props.withBorder ? 'border-0' : 'border-2'}`}>
        <img style={{ height: 360, objectFit: 'contain' }} src={props.image} alt="profile" />
        
        <styled.Name>{props.name}</styled.Name>
        <styled.Company>{props.company}</styled.Company>
        <styled.Position>{props.position}</styled.Position>
        <p className="font-bold text-base mt-2 uppercase">{props.t('phone')}: <span className="text-base font-normal">{props.phone}</span></p>
        <p className="font-bold text-base uppercase">{props.t('mobile')}: <span className="text-base font-normal">{props.mobile}</span></p>
        <p className="font-bold text-base uppercase">{props.t('email')}: <span className="text-sm font-normal">{props.email}</span></p>
    </styled.Container>
);

DirectorCard.defaultProps = {
    withBorder: true,
};

export default DirectorCard;

import styled from 'styled-components'

const Container = styled.div`
    background: #eeeeee;
`;

const Title = styled.p`
    color: #006f96;
    font-size: 40px;
    line-height: 1;
    font-weight: 100;
    font-family: 'balboa-condensed';
`;

const Subtitle = styled.p`
    color: #79a7d7;
    font-weight: 100;
    line-height: 1;
    font-family: 'balboa-condensed';
    font-size: 70px;
`;

const P = styled.p`
    font-family: 'acumin-pro-condensed';
    font-size: 19px;
`;

const Icon = styled.img`
    width: 70px;
`;

const Count = styled.p`
    font-size: 40px;
    color: #fb7c44;
    font-weight: 600;
`;

const Desc = styled.p`
    font-size: 19px;
    font-family: 'balboa-condensed';
    color: #006f96;
    font-weight: 300;
`;

// #006f96
// #79a7d7
// #fb7c44

export default {
    Container,
    P,
    Title,
    Subtitle,
    Desc,
    Icon,
    Count,
};

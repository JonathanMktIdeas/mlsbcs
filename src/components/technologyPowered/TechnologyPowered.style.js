import styled from 'styled-components'

const Container = styled.div`
    background: #006f96;
`;

const Container2 = styled.div`
    background: #006f96;
    width: 100%;
`;

const Photo = styled.img`
    max-height: 400px;
    object-fit: cover;
    width: 100%;

    @media(max-width: 890px) {
        max-height: 130px;
    }
`;

const P = styled.p`
    font-family: 'acumin-pro-condensed';
    font-size: 19px;
`;

const Powered = styled.p`
    color: white;
    font-size: 50px;
    font-family: 'balboa-condensed';
`;

const PoweredBY = styled.span`
    color: #79a7d7;
    font-size: 70px;
    margin-top: 20px;
    font-family: 'balboa-condensed';
`;

const Button = styled.button`
    background: #fb7c44;
    color: white;
    width: 30px;
    height: 30px;
    :first-child {
        margin-right: 1px;
    }

    :focus {
        outline: none;
    }
`;

export default {
    Container,
    Container2,
    P,
    Photo,
    Button,
    Powered,
    PoweredBY,
};

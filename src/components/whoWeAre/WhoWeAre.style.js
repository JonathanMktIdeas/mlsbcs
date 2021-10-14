import styled from 'styled-components'

const ButtonLogin = styled.button`
    background: #006f96;
`;

const ButtonPay = styled.button`
    background: #fb7c44;
`;

const Text = styled.button`
    color: #006f96;
    font-weight: 900;
    font-size: 17px;
    line-height: 1;
    margin-left: 10px;
`;

const Floating = styled.h1`
    background: #79a7d7;
    color: white;
    padding: 40px 22px;
    font-weight: 800;
    font-size: 19px;
    text-align: justify;
    font-family: 'balboa';
    width: 77%;

`;

const Big = styled.h1`
    color: #cbcbcb;
    font-size: 80px;
    font-family: 'acumin-pro-condensed';
    font-weight: 800;
    line-height: 1;
`;

const Img = styled.img`
    width: 100%;
    object-fit: cover;
`;

const P = styled.p`
    font-family: 'acumin-pro-condensed';
    font-size: 19px;
`;

export default {
    ButtonPay,
    Text,
    P,
    Floating,
    Img,
    Big,
    ButtonLogin,
};

import styled from 'styled-components'

const Container = styled.div`
    background: #006f96;
`;

const Image = styled.img`
    height: 500px;
    object-fit: cover;
`;

const Container2 = styled.div`
    background: #006f96;
    width: 100%;
`;

const Title = styled.p`
    color: #006f96;
    font-size: 30px;
    line-height: 1;
    font-family: 'balboa';
    font-weight: 100;
    text-transform: uppercase;
`;

const Big = styled.p`
    color: #ccc;
    line-height: 1;
    font-family: 'balboa';
    font-size: 80px;
    text-transform: uppercase;
`;

const Small = styled.p`
    color: #79a7d7;
    font-family: 'acumin-pro-condensed';
    font-size: 22px;
`;

const Photo = styled.img`
    max-height: 400px;
    object-fit: cover;
    width: 100%;
`;

const Powered = styled.p`
    color: white;
    font-size: 35px;
`;

const PoweredBY = styled.span`
    color: #79a7d7;
    font-size: 38px;
`;

const Button = styled.button`
    background: #fb7c44;
    color: white;
    font-size: 13px;
    padding: 3px 15px;
    font-weight: 800;

    :focus {
        outline: none;
    }
`;

const P = styled.p`
    font-family: 'acumin-pro-condensed';
    font-size: 19px;
`;

export default {
    Container,
    Title,
    Small,
    Container2,
    Big,
    P,
    Photo,
    Button,
    Powered,
    PoweredBY,
    Image,
};

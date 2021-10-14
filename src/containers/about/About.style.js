import styled from 'styled-components'

const Banner = styled.div`
    height: 450px;
    width: 100%;
    background-image: url(/assets/images/about.jpg);
    background-position: center 15%;
    background-repeat: no-repeat;
    background-size: cover;
`;

const Title = styled.p`
    font-size: 20px;
    line-height: 1;
    font-family: 'balboa';
    font-weight: 500;
    color: #006f96;
`;

const SimpleTitle = styled.p`
    font-size: 16px;
    line-height: 1;
    color: #006f96;
`;

const BannerTitle = styled.p `
font-size: 90px;
`;

const Content = styled.div`
    background: #006f96;
`;

const P = styled.p`
    font-family: 'acumin-pro-condensed';
    font-size: 19px;
`;

const Subtitle = styled.p`
    font-size: 70px;
    font-family: 'balboa';
    font-weight: 100;
    line-height: 1;
    color: #ccc;
`;

const Input = styled.input`
    width: 80%;
    padding: 3px;
    margin: 5px 0;
    border: 1px solid #ccc;
`;

const Button = styled.button`
    background: #fb7c44;
    color: white;
    width: 80%;
    padding: 5px 10px;
    margin-top: 15px;
`;

const TextArea = styled.textarea`
    width: 80%;
    padding: 3px;
    height: 150px;
    margin: 5px 0;
    border: 1px solid #ccc;
`;

export default {
    Banner,
    Input,
    Button,
    P,
    BannerTitle,
    TextArea,
    Subtitle,
    Content,
    SimpleTitle,
    Title
};

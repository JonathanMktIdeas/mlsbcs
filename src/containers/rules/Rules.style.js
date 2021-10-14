import styled from 'styled-components'

const Banner = styled.div`
    height: 450px;
    width: 100%;
    background-image: url(/assets/images/rules.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const Title = styled.p`
    font-size: 24px;
    line-height: 1;
    color: #006f96;
`;

const P = styled.p`
    font-family: 'acumin-pro-condensed';
    font-size: 19px;
`;

const Shadow = styled.p`
    font-size: 90px;
    text-shadow: 2px 2px 4px #000000;
    line-height: 1;
    color: white;
`;

const SimpleTitle = styled.p`
    font-size: 16px;
    line-height: 1;
    color: #006f96;
`;


const Content = styled.div`
    background: #006f96;
`;

const Subtitle = styled.p`
    font-size: 70px;
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
    Shadow,
    P,
    Button,
    TextArea,
    Subtitle,
    Content,
    SimpleTitle,
    Title
};

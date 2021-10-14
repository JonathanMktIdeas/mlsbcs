import styled from 'styled-components'

const Banner = styled.div`
    height: 450px;
    width: 100%;
    background-image: url(/assets/images/kya.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const Image = styled.img`
    height: 500px;
    object-fit: cover;
`;

const TitleModal = styled.p`
    font-size: 27px;
    font-weight: 800;
    color: #fb7c44;
    margin-bottom: 20px;
`;

const TitleModal2 = styled.p`
    font-size: 20px;
    font-weight: 800;
    margin-bottom: 20px;
`;

const Shadow = styled.p`
    font-size: 90px;
    text-shadow: 2px 2px 4px #000000;
    line-height: 1;
    color: white;
`;

const P = styled.p`
    font-family: 'acumin-pro-condensed';
    font-size: 19px;
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
    font-size: 100px;
    line-height: 1;
    color: #006f96;
    margin: 0;
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
    padding: 5px 15px;
    font-family: 'balboa';
    border-radius: 7px;
    font-size: 18px;
`;

const TextArea = styled.textarea`
    width: 80%;
    padding: 3px;
    height: 150px;
    margin: 5px 0;
    border: 1px solid #ccc;
`;


const ButtonSort = styled.button`
    background: #79a7d7;
    padding: 5px 10px;
    color: white;
`;

const Title = styled.p`
    color: #ccc;
    font-size: 20px;
    line-height: 1;
    text-transform: uppercase;
`;

const Title2 = styled.p`
    color: #ccc;
    font-size: 40px;
    line-height: 1;
    text-transform: uppercase;
`;

const Big = styled.p`
    color: white;
    line-height: 1;
    font-size: 24px;
    font-family: 'balboa';
    font-weight: 500;
    text-transform: uppercase;
`;

const Small = styled.p`
    color: white;
    font-family: 'balboa';
    font-size: 16px;
`;


export default {
    Banner,
    Input,
    Shadow,
    Button,
    P,
    ButtonSort,
    TextArea,
    Image,
    Subtitle,
    TitleModal,
    TitleModal2,
    Content,
    SimpleTitle,
    Title,
    Title2,
    Big,
    Small,
};

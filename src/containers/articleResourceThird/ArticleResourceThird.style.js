import styled from 'styled-components'

const Banner = styled.div`
    height: 200px;
    width: 100%;
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
`;



const Image = styled.img`
    height: 500px;
    object-fit: cover;
`;

const Shadow = styled.p`
    font-size: 50px;
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
    font-size: 40px;
    line-height: 1;
    font-family: 'balboa';
    font-weight: 500;
    color: #79a7d7;
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
    padding: 5px;
    margin-top: 15px;
    font-size: 14px;
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
    margin: 0 5px;
    color: white;
`;

const Title = styled.p`
    font-size: 20px;
    line-height: 1;
    font-family: 'balboa';
    font-weight: 500;
    color: #79a7d7;
`;

const Big = styled.p`
    color: white;
    line-height: 1;
    font-size: 14px;
    font-weight: 800;
    text-transform: uppercase;
`;

const Small = styled.p`
    color: black;
    font-size: 20px;
    text-align: justify;
`;

const SmallRight = styled.p`
    color: black;
    font-size: 20px;
    text-align: justify;
    font-style: oblique;
`;

const SmallTitle = styled.p`
    color: black;
    font-size: 20px;
    font-weight: 100;
    line-height: 1;
    font-family: 'balboa';
`;

const Img = styled.img`
    width: 100%;
`;



export default {
    Banner,
    Input,
    Shadow,
    Button,
    ButtonSort,
    TextArea,
    Image,
    Subtitle,
    Content,
    SimpleTitle,
    Title,
    Big,
    Small,
    SmallTitle,
    Img,
    SmallRight,
};

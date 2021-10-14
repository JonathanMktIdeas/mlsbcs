import styled from 'styled-components'

const Banner = styled.div`
    height: 450px;
    width: 100%;
    background-image: url(/assets/images/blog.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const Image = styled.img`
    height: 500px;
    object-fit: cover;
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
    font-size: 90px;
    line-height: 1;
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
    padding: 7px 15px;
    margin-top: 15px;
    font-size: 17px;
    font-weight: 900;
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
    color: #006f96;
    font-size: 20px;
    line-height: 1;
    text-transform: uppercase;
`;

const Big = styled.p`
    color: white;
    line-height: 1;
    font-size: 14px;
    font-weight: 800;
    text-transform: uppercase;
`;

const Small = styled.p`
    color: white;
    font-size: 12px;
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
};

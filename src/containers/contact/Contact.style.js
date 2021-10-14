import styled from 'styled-components'

const Banner = styled.div`
    height: 450px;
    width: 100%;
    background-image: url(/assets/images/contact.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const Title = styled.p`
    font-size: 34px;
    text-align: left;
    line-height: 1;
    color: #006f96;
`;



const Hours = styled.p`
    font-size: 22px;
    text-align: justify;
    line-height: 1;
    margin-top: 20px;
    color: #006f96;
`;


const Phone = styled.p`
    font-size: 18px;
    margin-top: 20px;
    font-weight: 700;
    text-align: justify;
    line-height: 1;
    color: #fb7c44;
`;

const SimpleTitle = styled.p`
    font-size: 16px;
    margin: 10px 0;
    line-height: 1;
    color: #79a7d7;
`;


const Content = styled.div`
    background: #006f96;
`;

const Subtitle = styled.p`
    font-size: 40px;
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
    font-weight: 700;
    padding: 5px 10px;
    margin-top: 15px;
`;

const Label = styled.label`
    font-size: 18px;
    line-height: 1;
    margin-top: 3px;
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
    Phone,
    Hours,
    Label,
    TextArea,
    Subtitle,
    Content,
    SimpleTitle,
    Title
};

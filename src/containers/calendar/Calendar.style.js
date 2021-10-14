import styled from 'styled-components'

const Banner = styled.div`
    height: 450px;
    width: 100%;
    background-image: url(/assets/images/calendar.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const Title = styled.p`
    color: #006f96;
    font-size: 20px;
    line-height: 1;
    text-transform: uppercase;
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
    font-size: 80px;
    line-height: 1;
    color: #ccc;
    margin-bottom: 60px;
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
    margin-bottom: 30px;
    font-size: 18px;
    margin-right: 7px;
`;

const TextArea = styled.textarea`
    width: 80%;
    padding: 3px;
    height: 150px;
    margin: 5px 0;
    border: 1px solid #ccc;
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    background: #006f96;
    color: white;
    font-weight: 700;
    font-size: 20px;
`;

export default {
    Banner,
    Input,
    Header,
    Shadow,
    Button,
    TextArea,
    Subtitle,
    Content,
    SimpleTitle,
    Title
};

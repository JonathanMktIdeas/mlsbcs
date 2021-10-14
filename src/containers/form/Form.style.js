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
    font-size: 16px;
    line-height: 1;
    color: #006f96;
`;

const Gray = styled.div`
    background: #eeeeee;
`;

const White = styled.div`
    background: white;
    border-right: 1px solid #ccc;
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
    font-size: 35px;
    line-height: 1;
    color: #ff7e4a;
    margin-top: 50px;
    margin-bottom: 20px;
    text-align: center;
    font-family: 'balboa';

`;

const Input = styled.input`
    padding: 5px;
    border-radius: 4px;

    :focus {
        outline: none;
    }
`;

const Button = styled.button`
    background: #fb7c44;
    color: white;
    font-size: 20px;
    padding: 5px 20px;
    font-weight: 500;
    font-family: 'balboa';
    margin-top: 45px;
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
    padding: 3px 20px;
    background: #006f96;
    color: white;
    font-family: 'balboa';
    font-weight: 600;
    font-size: 24px;
`;


const Price = styled.p`
    font-size: 20px;
    color: #007a3a;
    font-weight: 800;
`;

const PayButton = styled.button`
    color: white;
    font-size: 18px;
    font-weight: 800;
    margin-top: 10px;
    background: #007dc1;
    padding: 2px 6px;
`;

const Scroll = styled.div`
    max-height: 230px;
    overflow: hidden;
    overflow-y: scroll;
`;

const ButtonAdd = styled.button`
    border: 1px solid green;
    font-size: 9px;
    color: green;
    padding: 2px 6px;
    border-radius: 8px;
`;

const ButtonRemove = styled.button`
    border: 1px solid red;
    font-size: 9px;
    color: red;
    padding: 2px 6px;
    border-radius: 8px;
`;

const Row = styled.p`

`;

export default {
    Banner,
    Input,
    Row,
    ButtonRemove,
    ButtonAdd,
    Price,
    PayButton,
    Scroll,
    Gray,
    White,
    Header,
    Button,
    TextArea,
    Subtitle,
    Content,
    SimpleTitle,
    Title
};

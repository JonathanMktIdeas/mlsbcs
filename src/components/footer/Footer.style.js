import styled from 'styled-components'

const Image = styled.img`
    width: 70px;
    height: 60px;
    object-fit: contain;
`;

const Footer = styled.footer`
    background: #1c1b1a;
`;


const Title = styled.p`
    color: white;
    font-size: 20px;
    font-weight: 800;
`;

const Line = styled.div`
    width: 100%;
    height: 0.2px;
    background: white;
`;

const Button = styled.button`
    background: #fb7c44;
    color: white;
    padding: 5px 10px;

    :focus {
        outline: none;
    }
`;

const ButtonUp = styled.button`
    background: #79a7d7;
    color: white;
    padding: 10px;

    :focus {
        outline: none;
    }
`;

export default {
    Image,
    Title,
    ButtonUp,
    Line,
    Button,
    Footer,
};

import styled from 'styled-components'

const Banner = styled.div`
    height: 82vh;
    width: 100%;
    background-image: url(/assets/images/banner.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const Description = styled.p`
    font-size: 40px;

    @media(max-width: 890px) {
        font-size: 25px;
    }
`;

const Button = styled.button`
    background: #fb7c44;
    color: white;
    text-transform: uppercase;
`;

export default {
    Banner,
    Description,
    Button,
};

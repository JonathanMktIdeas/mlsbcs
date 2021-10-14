import styled from 'styled-components'

const Container = styled.div`

`;

const Company = styled.p`
    color: #79a7d7;
    font-size: 20px;
    font-weight: 800;
`;

const Name = styled.p`
    color: black;
    font-weight: 300;
    font-size: 16px;
    margin-top: 8px;
`;

const Button = styled.button`
    background: #fb7c44;
    color: white;
    font-size: 14px;
    padding: 3px 15px;
    font-weight: 800;

    :focus {
        outline: none;
    }
`;

const Position = styled.p`
    font-size: 19px;
    margin-top: 0px;
`;


const CompanyLight = styled.p`
    color: white;
    font-size: 13px;
    font-weight: 800;
`;

const NameLight = styled.p`
    color: white;
    font-weight: 800;
    font-size: 14px;
    margin-top: 8px;
`;

const PositionLight = styled.p`
    font-size: 15px;
    color: white;
    margin-top: 0px;
`;


export default {
    Container,
    Company,
    Name,
    Button,
    CompanyLight,
    NameLight,
    PositionLight,
    Position,
};

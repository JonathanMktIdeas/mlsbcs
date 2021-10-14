import styled from 'styled-components'

const Container = styled.div`
    margin: 10px;
    max-width: 300px;
`;

const Company = styled.p`
    color: #79a7d7;
    font-size: 16px;
    font-weight: 800;
`;

const Name = styled.p`
    color: #006f96;
    font-weight: 800;
    font-size: 20px;
    margin-top: 8px;
`;

const Position = styled.p`
    font-size: 15px;
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
    CompanyLight,
    NameLight,
    PositionLight,
    Position,
};

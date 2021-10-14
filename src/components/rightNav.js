import React  from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from '@components/navbar';
import UserMenu from '@components/userMenu';

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    margin: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;

  .active a {
      color: #ff8c00;
      border-bottom: 2px solid #ff8c00;
  }

  .active.purple a {
      color: #6B127A;
      border-bottom: 2px solid #6B127A;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #7aa7d7;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    z-index: 9;
    display: flex;
    justify-content: flex-start!important;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    padding-left: 0;
    li a {
      color: #fff;
    }
  }
`;

const Li = styled.li`
    margin: 0 25px;
    text-transform: uppercase;
    font-family: 'NextMedium';
    font-size: 25px;
    align-items: flex-end;
    border-bottom: 2px solid transparent;

    @media(max-width: 890px) {
        width: 40px;
        background: white;
        border-radius: 25px;
        align-items: center;
        justify-content: center;
        display: flex;
    }
`;

const Counter = styled.div`
    position: absolute;
    right: -15px;
    bottom: -15px;
    border-radius: 50%;
    width: 25px;
    font-weight: 700;
    height: 25px;
    color: white;
    text-align: center;

    @media(max-width: 890px) {
        width: 25px;
        height: 25px;
        font-size: 15px;
    }
`;

const getCounter = (cart) => {
    return cart.reduce((accumulator, currentValue) =>
        accumulator + (currentValue.StockFlag ? Object.keys(currentValue.count).reduce((acc, curr) => acc + currentValue.count[curr], 0) : currentValue.count), 0);
}

const RightNav = ({ open, ...rest }) => (
    <Ul open={open}>
        <Navbar {...rest} />
        <UserMenu {...rest} navbar />
    </Ul>
);

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps)(RightNav);

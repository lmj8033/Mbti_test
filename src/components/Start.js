import { useDispatch } from 'react-redux';
import { next } from '../store/modules/myq';
import React from 'react';
import styled from 'styled-components';
import OrangeButton from './OrangeButton';

const Header = styled.p`
  font-size: 3em;
`;

const MainImg = styled.img`
  width: 5em;
  margin-top: 10vw;
`;

const SubHeader = styled.p`
  font-size: 1.5em;
  color: #777;
`;

export default function Start() {
  const dispatch = useDispatch();
  return (
    <>
      <MainImg src="/images/logo.png" alt="친구" />
      <Header>나와 닮은 오버워치 영웅은?</Header>
      <SubHeader></SubHeader>
      <OrangeButton text="Start" clickEvent={() => dispatch(next())} />
    </>
  );
}

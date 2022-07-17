import styled from 'styled-components';

import { DeviceSize } from '../../DeviceSize';

export const CheckersContent = styled.div`
  height: auto;
  display: grid;

  @media (min-width: ${DeviceSize.laptop}) {
    width: 1024px;
    margin: 0 auto;
    margin-top: 50px;
    height: 2px;
    padding: 10px 0;
    height: 502px;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
`;

export const GameBoard = styled.div`
  /* width: 100%;
  height: 100%; */
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  border: 1px solid var(--gray);
  border-radius: 5px;

  @media (min-width: ${DeviceSize.laptop}) {
    width: 500px;
    height: 500px;
  }
`;

export const Rules = styled.article`
  width: 100%;
  height: auto;
  padding: 20px;
  /* border: 1px solid var(--blue); */
  box-shadow: var(--shadow);
  border-radius: 5px;
  line-height: 2rem;

  & > h3 {
    text-align: center;
    font-weight: 600;
    font-size: 1.2rem;
    margin-bottom: 10px;
  }

  & > h4 {
    margin-top: 10px;
    text-align: left;
    font-weight: 500;
    font-size: 1.1rem;
  }

  & > p {
    font-size: 1rem;
    font-weight: 300;
  }

  @media (min-width: ${DeviceSize.laptop}) {
    overflow-y: scroll;
  }
`;

export const Square = styled.button<{ dark: number }>``;

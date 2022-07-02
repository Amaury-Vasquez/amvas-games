import styled from 'styled-components';

export const Bar = styled.div<{ progress: number }>`
  border-radius: 50px;
  border: 1px solid var(--gray);

  & > span {
    transition: width 0.5s;
    border-radius: inherit;
    background: var(--blue);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    font-size: 0.8rem;
    text-align: center;
    width: ${(props) => `${props.progress}%`};
    height: 100%;
  }
`;

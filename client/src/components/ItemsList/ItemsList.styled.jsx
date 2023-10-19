import styled from 'styled-components';

import { themes } from 'styles/themes';

export const Title = styled.h1`
  padding: 50px 80px 0;
  font-size: 28px;
  line-height: 1.21;
  color: ${themes.colors.accent};
`;

export const CardWrap = styled.div`
  padding: 20px 14px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
  border-radius: ${themes.radius.s};

  background-size: cover;
  background-position: center;
  color: ${themes.colors.white};

  & h2 {
    margin-bottom: 5px;

    font-size: 20px;
    line-height: 1.7;
  }
  & span {
    font-size: 18px;
    font-weight: 700;
    line-height: 1.22;
    font-family: 'Lato', sans-serif;
  }
`;

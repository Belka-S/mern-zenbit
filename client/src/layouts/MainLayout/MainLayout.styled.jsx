import styled from 'styled-components';

import { themes } from 'styles/themes';
import mainBackground from 'assets/img/mainBackground.jpg';

export const MainContainer = styled.div`
  margin-top: 80px;
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  color: ${themes.colors.white};
  background-image: linear-gradient(
      to right,
      rgba(23, 34, 52, 0.6),
      rgba(23, 34, 52, 0.6)
    ),
    url(${mainBackground});
  background-size: cover;

  & h1 {
    margin-bottom: 10px;

    font-size: 64px;
  }

  & p {
    width: 822px;
    margin-bottom: 30px;

    font-family: 'Lato', sans-serif;
    font-weight: 400;
    font-size: 24px;
    line-height: 1.33;
    letter-spacing: 0.02em;
  }

  & button {
    background-color: transparent;
    color: ${themes.colors.white};
    border-color: ${themes.colors.white};
    font-size: 20px;
    line-height: 1.7;
  }
`;

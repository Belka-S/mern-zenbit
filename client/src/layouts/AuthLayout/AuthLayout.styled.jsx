import styled from 'styled-components';

// import { themes } from 'styles/themes';
import authBackground from 'assets/img/authBackground.jpg';

export const AuthContainer = styled.div`
  display: flex;

  & .back {
    width: 100%;
    background-image: url(${authBackground});
    background-size: cover;
    background-position: center;
  }
`;

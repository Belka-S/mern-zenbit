import styled from 'styled-components';

import { themes } from 'styles/themes';

export const StyledHeader = styled.header`
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 18px 80px;
  z-index: 10;

  background-color: ${themes.colors.black};

  & button {
    &.signup {
      background-color: transparent;
      margin-left: 10px;
      color: ${themes.colors.white};
      background-color: ${themes.colors.accent};
    }
  }
`;

import styled from 'styled-components';

import { themes } from 'styles/themes';

export const StyledHeader = styled.header`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 18px 80px;
  z-index: 10;

  border-bottom: 1px solid black;
  background-color: ${themes.colors.black};
`;

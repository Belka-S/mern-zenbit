import styled, { css } from 'styled-components';
import { Link as RouteLink } from 'react-router-dom';

import { themes } from 'styles/themes';

const CommonStyles = css`
  margin-left: auto;

  color: ${themes.colors.accent};
  font-family: 'Lato', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.57;
  transition: color 250ms;

  &:hover,
  &:focus {
    color: ${themes.colors.hovered};
  }
`;

export const Link = styled(RouteLink)`
  ${CommonStyles};
`;

export const Btn = styled.button`
  ${CommonStyles};

  background-color: transparent;
  border-color: transparent;
`;

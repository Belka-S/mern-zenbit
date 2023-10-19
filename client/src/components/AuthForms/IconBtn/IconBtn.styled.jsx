import styled from 'styled-components';
import { themes } from 'styles/themes';

export const Button = styled.button`
  width: fit-content;
  position: absolute;
  top: 50%;
  left: 10px;

  transform: translateY(-50%);

  border-color: transparent;
  background-color: transparent;
  color: ${themes.colors.black};
  transition: color 250ms;
`;

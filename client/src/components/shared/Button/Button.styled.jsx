import styled from 'styled-components';
import { themes } from 'styles/themes';

export const Btn = styled.button`
  width: 160px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Merriweather', serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.375;

  color: ${themes.colors.accent};
  border: 1px solid ${themes.colors.accent};
  border-radius: ${themes.radius.s};
  background-color: transparent;
  transition: transform 250ms;

  &:hover {
    transform: scale(1.02);
  }
`;

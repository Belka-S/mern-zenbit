import styled, { css } from 'styled-components';
import { themes } from 'styles/themes';

const CommonStyles = css`
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  font-family: 'Merriweather', serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.37;

  border: 1px solid;
  border-radius: ${themes.radius.s};
  transition: border-color 250ms, background-color 250ms, color 250ms;
`;

export const SignButton = styled.button`
  ${CommonStyles};

  margin-top: 30px;

  border-color: ${themes.colors.accent};
  color: ${themes.colors.white};
  background-color: ${themes.colors.accent};

  &:hover,
  &:focus {
    border-color: ${themes.colors.hovered};
    background-color: ${themes.colors.hovered};
  }

  &:disabled {
    cursor: auto;
    color: ${themes.colors.border};
    border-color: ${themes.colors.accent};
    background-color: ${themes.colors.accent};
  }
`;

export const IconLink = styled.a`
  ${CommonStyles};

  margin-top: 18px;
  padding-inline: 10px;

  border-color: ${themes.colors.accent};
  color: ${themes.colors.black};
  background-color: transparent;
  transition: color 250ms, border-color 250ms;

  &:hover,
  &:focus {
    color: ${themes.colors.hovered};
    border-color: ${themes.colors.hovered};
  }

  & div {
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & pre {
    font-size: 12px;
  }
`;

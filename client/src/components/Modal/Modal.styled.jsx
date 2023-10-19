import styled from 'styled-components';
import { themes } from 'styles/themes';

export const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;

  background-color: ${themes.colors.backdrop};
  backdrop-filter: blur(5px);

  & > div {
    position: absolute;
    top: 50%;
    right: 0;

    transform: translateY(-50%);

    background-color: transparent;
    box-shadow: ${themes.shadows.modal};
  }
`;

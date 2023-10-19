import styled from 'styled-components';

export const Div = styled.div`
  margin: ${({ m = '0' }) => m};
  padding: ${({ p = '0' }) => p};
  width: ${({ w = '100%' }) => w};
  /* max-width: 1440px; */
  height: ${({ h }) => h};
  position: relative;

  display: ${({ d }) => d};
  flex-direction: ${({ fd }) => fd};
  align-items: ${({ ai }) => ai};
  justify-content: ${({ jc }) => jc};

  background-color: transparent;
`;

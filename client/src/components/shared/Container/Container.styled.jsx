import styled from 'styled-components';

export const Div = styled.div`
  margin: ${({ m = '0 auto' }) => m};
  padding: ${({ p = '0 80px' }) => p};
  width: ${({ w = '100%' }) => w};
  /* max-width: 1440px; */
  height: ${({ h }) => h};
  position: relative;

  display: ${({ d }) => d};
  flex-direction: ${({ fd }) => fd};
  align-items: ${({ ai }) => ai};
  justify-content: ${({ jc }) => jc};

  background-color: transparent;

  p,
  h1,
  h2,
  h3 {
    /* margin-bottom: 5px; */
    margin: ${({ mt = '0 0 15px 0' }) => mt};
    font-family: 'Montserrat', sans-serif;
    text-align: ${({ ta }) => ta};
    font-size: 26px;
  }

  h1 {
    font-size: 36px;
  }
`;

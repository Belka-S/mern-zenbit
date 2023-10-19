import styled from 'styled-components';

export const Div = styled.div`
  margin: ${({ m }) => m};
  padding: ${({ p = '20px 80px' }) => p};
  /* max-width: 1280px; */
  display: grid;
  justify-content: center;

  grid-template-columns: repeat(
    auto-fit,
    minmax(${({ mm = '450px' }) => mm}, 1fr)
  );

  grid-row-gap: ${({ rg = '20px' }) => rg};
  grid-column-gap: ${({ cg = '20px' }) => cg};
  grid-template-columns: ${({ gtc }) => gtc};
`;

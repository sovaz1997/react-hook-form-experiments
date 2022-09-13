import { css, styled } from '@mui/material';

export const Wrapper = styled('div')`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;

  ${(p) => p.error && css`
    border: 1px solid red;
    color: red;
    padding: 3px;
  `}
`;

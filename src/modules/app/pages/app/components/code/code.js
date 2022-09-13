import { styled } from '@mui/material';

const Wrapper = styled('pre')`
  font-family: monospace, sans-serif;
  color: #d9d9d9;
  font-size: 16px;
`;

export const Code = ({ value }) => (
  <Wrapper>
    {JSON.stringify(value, null, 2)}
  </Wrapper>
);

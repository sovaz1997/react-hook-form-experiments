import { styled } from '@mui/material';

export const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  borderRadius: '25px',
  backgroundColor: '#004374',
  border: 'none',
  boxShadow: 24,
  p: 4,
};

export const FormBlocks = styled('div')`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

export const Wrapper = styled('div')`
  margin: 0 auto;
  max-width: 600px;
  padding: 0 10px;
`;

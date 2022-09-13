import { Button, styled } from '@mui/material';

const Wrapper = styled('div')`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
`;

export const Drink = ({
  name, price, onRemove,
}) => (
  <Wrapper>
    <span>{ `${name}: ${price}р` }</span>
    <Button type="button" onClick={onRemove}>Удалить</Button>
  </Wrapper>
);

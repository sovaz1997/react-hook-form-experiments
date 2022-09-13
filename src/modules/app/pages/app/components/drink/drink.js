import { Button, styled, css } from '@mui/material';
import { useController } from 'react-hook-form';
import { useFormPrefixProvider } from '../../../../../form';

const Wrapper = styled('div')`
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

export const Drink = ({
  name,
  price,
  onRemove,
  validate = {},
}) => {
  const prefix = useFormPrefixProvider();

  const {
    fieldState: { error },
  } = useController({
    name: prefix,
    rules: {
      validate,
    },
  });

  return (
    <Wrapper error={error}>
      <span>{`${name}: ${price}р`}</span>
      <Button type="button" onClick={onRemove}>Удалить</Button>
    </Wrapper>
  );
};

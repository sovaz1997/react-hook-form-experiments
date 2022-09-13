import { Button } from '@mui/material';
import { useController } from 'react-hook-form';
import { useFormPrefixProvider } from '../../../../../form';
import * as S from './style';

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
    <S.Wrapper error={error}>
      <span>{`${name}: ${price}р`}</span>
      <Button type="button" onClick={onRemove}>Удалить</Button>
    </S.Wrapper>
  );
};

import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { FormControls } from '../../../../../form';
import { useDrinks } from '../../../../../../hooks/use-drinks';
import { FormProvider } from '../../../../../form/providers/form-provider';
import * as S from './style';

export const AddDrinkForm = ({ onSubmit }) => {
  const form = useForm();

  const { data, loading } = useDrinks();

  if (loading) {
    return null;
  }

  return (
    <FormProvider {...form}>
      <S.Controls>
        <FormControls.Select
          options={data.map((drink) => ({ text: drink.name, value: drink.id }))}
          name="drink"
          className="select"
          label="Напиток"
          rules={{ required: true }}
          sx={{ width: '240px' }}
        />
        <Button type="submit" onClick={form.handleSubmit(onSubmit)}>Добавить</Button>
      </S.Controls>
    </FormProvider>
  );
};

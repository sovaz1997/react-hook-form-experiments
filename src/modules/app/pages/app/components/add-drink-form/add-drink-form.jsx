import { Button, styled } from '@mui/material';
import { useForm } from 'react-hook-form';
import { FormControls } from '../../../../../form';
import { useDrinks } from '../../../../../../hooks/use-drinks';
import { FormProvider } from '../../../../../form/providers/form-provider';

const Controls = styled('div')`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  padding-top: 16px;
`;

export const AddDrinkForm = ({ onSubmit }) => {
  const form = useForm();

  const { data, loading } = useDrinks();

  if (loading) {
    return null;
  }

  return (
    <FormProvider {...form}>
      <Controls>
        <FormControls.Select
          options={data.map((drink) => ({ text: drink.name, value: drink.id }))}
          name="drink"
          className="select"
          label="Напиток"
          rules={{ required: true }}
          sx={{ width: '240px' }}
        />
        <Button type="submit" onClick={form.handleSubmit(onSubmit)}>Добавить</Button>
      </Controls>
    </FormProvider>
  );
};

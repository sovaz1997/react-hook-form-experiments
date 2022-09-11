import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { FormControls } from '../../../../../form';
import { useDrinks } from '../../../../../../hooks/use-drinks';
import { FormProvider } from '../../../../../form/providers/form-provider';

export const AddDrinkForm = ({ onSubmit }) => {
  const form = useForm();

  const { data, loading } = useDrinks();

  if (loading) {
    return null;
  }

  return (
    <FormProvider {...form}>
      <FormControls.Select
        options={data.map((drink) => ({ text: drink.name, value: drink.id }))}
        name="drink"
        rules={[{ required: true }]}
        label="Test"
        sx={{ width: '240px' }}
      />
      <Button type="submit" onClick={form.handleSubmit(onSubmit)}>Добавить</Button>
    </FormProvider>
  );
};

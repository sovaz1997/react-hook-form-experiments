import { Button } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { FormBlock, FormControls } from '../../../form';
import { PersonalInfo } from './components/personal-info';

export const App = () => {
  const form = useForm({
    defaultValues: {
      showField: true,
    },
  });

  const onSubmit = (res) => {
    console.log(res);
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormControls.Checkbox name="showField" />
        <FormBlock name="personalInfo">
          <PersonalInfo />
        </FormBlock>
        <Button type="submit">Send</Button>
      </form>
    </FormProvider>
  );
};

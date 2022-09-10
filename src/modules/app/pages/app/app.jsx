import { Button } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { FormBlock } from '../../../form';
import { PersonalInfo } from './components/personal-info';

export const App = () => {
  const form = useForm();

  useEffect(() => {
    // setTimeout(() => {
    //   form.setValue('personalInfo.hidePatronymic', true);
    // });
    form.setValue('personalInfo.hidePatronymic', true);
    form.setValue('personalInfo.firstName', '123');
  }, [form]);

  const onSubmit = (res) => {
    console.log(res);
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormBlock name="personalInfo" title="Персональная информация">
          <PersonalInfo />
        </FormBlock>
        <Button type="submit">Send</Button>
      </form>
    </FormProvider>
  );
};

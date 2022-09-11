import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { FormBlock } from '../../../form';
import { FormProvider } from '../../../form/providers/form-provider';
import { PersonalInfo } from './components/personal-info';
import { DrinksList } from './components/drinks-list';

export const App = () => {
  const form = useForm();
  const [formIsLoading, setFormIsLoading] = useState(true);

  useEffect(() => {
    form.reset({
      personalInfo: {
        hidePatronymic: true,
      },
    });
    setFormIsLoading(false);
  }, [form]);

  const onSubmit = (res) => {
    console.log(res);
  };

  if (formIsLoading) {
    return null;
  }

  return (
    <div>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormBlock name="personalInfo" title="Персональная информация">
            <PersonalInfo />
          </FormBlock>
          <DrinksList name="drinks" />
          <Button type="submit">Send</Button>
        </form>
      </FormProvider>
    </div>
  );
};

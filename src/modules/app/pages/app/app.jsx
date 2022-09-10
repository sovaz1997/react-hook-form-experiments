import { FormProvider, useForm } from 'react-hook-form';
import { FormBlock, FormControls } from '../../../form';

export const App = () => {
  const form = useForm({
    defaultValues: {
      showField: true,
    },
  });

  const showField = form.watch('showField');

  const onSubmit = (res) => {
    console.log(res);
  };

  return (
    <FormProvider {...form}>
      <FormControls.Checkbox name="showField" />
      <FormBlock name="block">
        {showField && (
          <FormControls.TextField
            label="Test field"
            rules={{
              required: {
                value: true,
                message: 'Required field!',
              },
            }}
            name="test"
            defaultValue="123"
          />
        )}
      </FormBlock>
      <button type="submit" onClick={form.handleSubmit(onSubmit)}>Send</button>
    </FormProvider>
  );
};

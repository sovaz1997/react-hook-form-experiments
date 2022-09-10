import { FormProvider, useForm } from 'react-hook-form';
import { FormControls } from './components/form-controls';
import FormBlock from './components/form-block';

const App = () => {
  const form = useForm();

  const showField = form.watch('block.showField');

  const onSubmit = (res) => {
    console.log(res);
  };

  return (
    <FormProvider {...form}>
      <FormBlock name="block">
        <FormControls.Checkbox name="showField" defaultValue />
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

export default App;

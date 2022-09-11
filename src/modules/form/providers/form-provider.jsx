import { FormProvider as FormProviderReactHookForm } from 'react-hook-form';
import { FormPrefixContext } from '../contexts/form-prefix-context';

export const FormProvider = ({ children, ...props }) => (
  <FormProviderReactHookForm {...props}>
    <FormPrefixContext.Provider value="">
      {children}
    </FormPrefixContext.Provider>
  </FormProviderReactHookForm>
);

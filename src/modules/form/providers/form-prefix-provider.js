import { FormPrefixContext } from '../contexts/form-prefix-context';
import { combinePath } from '../utils/combine-path';
import { useFormPrefixProvider } from '../hooks/use-form-prefix-provider';

export const FormPrefixProvider = ({ prefix, children }) => {
  const currentPrefix = useFormPrefixProvider();

  return (
    <FormPrefixContext.Provider value={combinePath(currentPrefix, prefix)}>
      {children}
    </FormPrefixContext.Provider>
  );
};

import { combinePath } from '../utils/combine-path';
import { useFormPrefixProvider } from './use-form-prefix-provider';

export const useFormHelpers = () => {
  const prefix = useFormPrefixProvider();

  return {
    getName: (name) => combinePath(prefix, name),
  };
};

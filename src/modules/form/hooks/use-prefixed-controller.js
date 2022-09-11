import { useController, useFormContext } from 'react-hook-form';
import { useFormHelpers } from './use-form-helpers';

export const usePrefixedController = ({ name, rules, defaultValue }) => {
  const { control } = useFormContext();
  const { getName } = useFormHelpers();

  return useController({
    name: getName(name),
    control,
    rules,
    defaultValue,
  });
};

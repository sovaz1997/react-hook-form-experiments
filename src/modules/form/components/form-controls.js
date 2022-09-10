import React from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { TextField as MTextField, Checkbox as MCheckbox } from '@mui/material';
import { useFormHelpers } from '../hooks/use-form-helpers';

const usePrefixedController = ({ name, rules, defaultValue }) => {
  const { control } = useFormContext();
  const { getName } = useFormHelpers();

  return useController({
    name: getName(name),
    control,
    rules,
    defaultValue,
  });
};

const TextField = ({
  name, rules, defaultValue, ...props
}) => {
  const {
    field: { onChange, value },
    fieldState: { error },
  } = usePrefixedController({
    name, rules, defaultValue,
  });

  return (
    <MTextField
      value={value}
      onChange={(e) => onChange(e.target.value)}
      defaultValue={defaultValue}
      variant="filled"
      required={rules.required}
      error={!!error}
      helperText={error?.message}
      {...props}
    />
  );
};

const Checkbox = ({
  name, rules, defaultValue, ...props
}) => {
  const {
    field: { onChange, value },
  } = usePrefixedController({
    name, rules, defaultValue,
  });

  return (
    <MCheckbox
      checked={value}
      onChange={(e) => onChange(e.target.checked)}
      defaultValue={defaultValue}
      variant="filled"
      {...props}
    />
  );
};

export const FormControls = {
  TextField,
  Checkbox,
};

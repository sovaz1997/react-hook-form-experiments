import React from 'react';
import {
  TextField as MTextField, Checkbox as MCheckbox, Select as MSelect, MenuItem, InputLabel, FormControl,
} from '@mui/material';
import { usePrefixedController } from '../hooks/use-prefixed-controller';

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
      value={value || ''}
      onChange={(e) => onChange(e.target.value)}
      defaultValue={defaultValue}
      variant="filled"
      required={!!rules.required}
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
      checked={!!value}
      onChange={(e) => onChange(e.target.checked)}
      {...props}
    />
  );
};

const Select = ({
  name, rules, defaultValue, options, ...props
}) => {
  const {
    field: { onChange, value },
  } = usePrefixedController({
    name, rules, defaultValue,
  });

  return (
    <FormControl>
      <InputLabel>123</InputLabel>
      <MSelect
        value={value || ''}
        autoWidth
        onChange={(e) => onChange(e.target.value)}
        required={!!rules.required}
        {...props}
      >
        {options.map((option) => <MenuItem key={option.value} value={option.value}>{option.text}</MenuItem>)}
      </MSelect>
    </FormControl>
  );
};

export const FormControls = {
  TextField,
  Checkbox,
  Select,
};

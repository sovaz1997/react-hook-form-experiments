import React from 'react';
import {
  TextField as MTextField,
  Checkbox as MCheckbox,
  Select as MSelect, MenuItem,
  InputLabel, FormControl,
} from '@mui/material';
import { DatePicker as MDatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { usePrefixedController } from '../hooks/use-prefixed-controller';

const TextField = ({
  name,
  rules,
  defaultValue,
  ...props
}) => {
  const {
    field: {
      onChange,
      value,
    },
    fieldState: { error },
  } = usePrefixedController({
    name,
    rules,
    defaultValue,
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
  name,
  rules,
  defaultValue,
  ...props
}) => {
  const {
    field: {
      onChange,
      value,
    },
  } = usePrefixedController({
    name,
    rules,
    defaultValue,
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
  name,
  rules,
  defaultValue,
  options,
  label,
  ...props
}) => {
  const {
    field: {
      onChange,
      value,
    },
    fieldState: { error },
  } = usePrefixedController({
    name,
    rules,
    defaultValue,
  });

  return (
    <FormControl>
      <InputLabel>{label}</InputLabel>
      <MSelect
        value={value || ''}
        autoWidth
        onChange={(e) => onChange(e.target.value)}
        required={!!rules.required}
        error={!!error}
        {...props}
      >
        {options.map((option) => <MenuItem key={option.value} value={option.value}>{option.text}</MenuItem>)}
      </MSelect>
    </FormControl>
  );
};

const DatePicker = ({
  name, rules, defaultValue, label, ...props
}) => {
  const isValidDate = (date) => date instanceof Date && !isNaN(date);

  const {
    field: {
      onChange,
      value,
    },
    fieldState: { error },
  } = usePrefixedController({
    name,
    rules: { ...rules, validate: { isValidDate } },
    defaultValue,
  });

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MDatePicker
        minDate="0000-01-01"
        label={label}
        value={value || null}
        onChange={onChange}
        required={!!rules.required}
        renderInput={(params) => <MTextField {...{ ...params, error: !!error }} />}
        {...props}
      />
    </LocalizationProvider>
  );
};

export const FormControls = {
  TextField,
  Checkbox,
  Select,
  DatePicker,
};

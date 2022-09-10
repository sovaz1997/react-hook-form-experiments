import React from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { TextField as MTextField, Checkbox as MCheckbox } from '@mui/material';
// import PropTypes from "prop-types";
// import { CurrencyInput, Form } from "@weezevent/nacre";
// import TranslatableInput from "../../../../../components/TranslatableInput";
import useFormHelpers from '../hooks/use-form-helpers';

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

// const ControlledToggleLabel = ({ name, rules, defaultValue, ...props }) => {
//   const {
//     field: { onChange, value },
//   } = usePrefixedController({
//     name, rules, defaultValue,
//   });
//
//   return (
//     <Form.ToggleLabel
//       onChange={(e) => onChange(e.target.checked)}
//       checked={value}
//       {...props}
//     />
//   );
// };
//
// ControlledToggleLabel.propTypes = {
//   name: PropTypes.string.isRequired,
//   rules: PropTypes.object,
//   defaultValue: PropTypes.object,
// };
//
// ControlledToggleLabel.defaultProps = {
//   rules: {},
//   defaultValue: false,
// };
//
// const ControlledSelectLabel = ({ name, rules, defaultValue, ...props }) => {
//   const {
//     field: { onChange, value },
//   } = usePrefixedController({
//     name, rules, defaultValue,
//   });
//
//   return (
//     <Form.SelectLabel
//       onChange={(_, { value }) => onChange(value)}
//       value={value}
//       {...props}
//     />
//   );
// };
//
// ControlledSelectLabel.propTypes = {
//   name: PropTypes.string.isRequired,
//   rules: PropTypes.object,
//   defaultValue: PropTypes.object,
// };
//
// ControlledSelectLabel.defaultProps = {
//   rules: {},
//   defaultValue: null,
// };
//
// const ControlledCurrencyInput = ({ name, rules, defaultValue, ...props }) => {
//   const {
//     field: { onChange, value },
//   } = usePrefixedController({
//     name, rules, defaultValue,
//   });
//
//   return (
//     <CurrencyInput
//       value={value}
//       onChange={({ value: v }) => onChange(v)}
//       {...props}
//     />
//   );
// };

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

import React from "react";
import { useController, useFormContext } from "react-hook-form";
import PropTypes from "prop-types";
import { CurrencyInput, Form } from "@weezevent/nacre";
import TranslatableInput from "../../../../../components/TranslatableInput";
import useFormHelpers from "../hooks/use-form-helpers";

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

const ControlledTranslatableInput = ({ name, rules, defaultValue, ...props }) => {
  const {
    field: { onChange, value },
  } = usePrefixedController({
    name, rules, defaultValue,
  });

  return <TranslatableInput translations={value} onChange={(_, v) => onChange(v)} {...props} />;
};

ControlledTranslatableInput.propTypes = {
  name: PropTypes.string.isRequired,
  rules: PropTypes.object,
  defaultValue: PropTypes.object,
};

ControlledTranslatableInput.defaultProps = {
  rules: {},
  defaultValue: {},
};

const ControlledToggleLabel = ({ name, rules, defaultValue, ...props }) => {
  const {
    field: { onChange, value },
  } = usePrefixedController({
    name, rules, defaultValue,
  });

  return (
    <Form.ToggleLabel
      onChange={(e) => onChange(e.target.checked)}
      checked={value}
      {...props}
    />
  );
};

ControlledToggleLabel.propTypes = {
  name: PropTypes.string.isRequired,
  rules: PropTypes.object,
  defaultValue: PropTypes.object,
};

ControlledToggleLabel.defaultProps = {
  rules: {},
  defaultValue: false,
};

const ControlledSelectLabel = ({ name, rules, defaultValue, ...props }) => {
  const {
    field: { onChange, value },
  } = usePrefixedController({
    name, rules, defaultValue,
  });

  return (
    <Form.SelectLabel
      onChange={(_, { value }) => onChange(value)}
      value={value}
      {...props}
    />
  );
};

ControlledSelectLabel.propTypes = {
  name: PropTypes.string.isRequired,
  rules: PropTypes.object,
  defaultValue: PropTypes.object,
};

ControlledSelectLabel.defaultProps = {
  rules: {},
  defaultValue: null,
};

const ControlledCurrencyInput = ({ name, rules, defaultValue, ...props }) => {
  const {
    field: { onChange, value },
  } = usePrefixedController({
    name, rules, defaultValue,
  });

  return (
    <CurrencyInput
      value={value}
      onChange={({ value: v }) => onChange(v)}
      {...props}
    />
  );
};

const FormControls = {
  TranslatableInput: ControlledTranslatableInput,
  ToggleLabel: ControlledToggleLabel,
  SelectLabel: ControlledSelectLabel,
  CurrencyInput: ControlledCurrencyInput,
};

export default FormControls;

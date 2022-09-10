import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import FormBlock from "./components/form-block";
import InformationBlock from "./components/information-block";
import ConfigurationBlock from "./components/configuration-block/configuration-block";

const NewScenariosPageEdit = ({ currencies }) => {
  const methods = useForm();

  const onSubmit = (values) => {
    console.log({ values });
  };

  return (
    <FormProvider {...{ ...methods, currencies }}>
      <FormBlock name="information">
        <InformationBlock />
      </FormBlock>
      <FormBlock name="configuration">
        <ConfigurationBlock />
      </FormBlock>
      <button type="submit" onClick={methods.handleSubmit(onSubmit)}>123</button>
    </FormProvider>
  );
};

export default NewScenariosPageEdit;

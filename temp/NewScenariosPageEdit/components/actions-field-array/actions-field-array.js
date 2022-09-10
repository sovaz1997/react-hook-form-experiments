import React from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import PropTypes from "prop-types";
import ActionBlock from "../action-block";
import FormBlock from "../form-block";
import useFormHelpers from "../../hooks/use-form-helpers";

const ActionsFieldArray = ({ name }) => {
  const { control } = useFormContext();

  const { getName } = useFormHelpers();
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
    control,
    name: getName(name),
  });

  React.useEffect(() => {
    append({});
  }, [append]);

  // TODO: Create FormArray component and hide logic with indexing
  return (
    <div>
      {
        fields.map((field, index) => (
          <FormBlock name={`${name}.${index}`} key={field.id}>
            <ActionBlock onRemove={() => remove(field.id)} index={index} />
          </FormBlock>
        ))
      }
    </div>
  );
};

ActionsFieldArray.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ActionsFieldArray;

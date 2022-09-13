import PropTypes from 'prop-types';
import { FormBlock } from './form-block';

const FieldArray = ({ name, fields, render }) => (
  <>
    {fields.map((field, index) => (
      <FormBlock name={`${name}.${index}`} key={field.id}>
        { render(field, index) }
      </FormBlock>
    ))}
  </>
);

FieldArray.propTypes = {
  name: PropTypes.string.isRequired,
  fields: PropTypes.arrayOf(PropTypes.object),
  render: PropTypes.func,
};

FieldArray.defaultProps = {
  fields: [],
  render: () => null,
};

export default FieldArray;

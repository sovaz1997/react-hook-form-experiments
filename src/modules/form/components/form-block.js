import PropTypes from 'prop-types';
import { FormPrefixProvider } from '../providers/form-prefix-provider';

export const FormBlock = ({ name, children, title }) => (
  <FormPrefixProvider prefix={name}>
    <p>{title}</p>
    {children}
  </FormPrefixProvider>
);

FormBlock.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.element,
};

FormBlock.defaultProps = {
  children: null,
};

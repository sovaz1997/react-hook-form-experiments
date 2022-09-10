import React from 'react';
import FormPrefixContext from '../contexts/form-prefix-context';

const useFormPrefixProvider = () => React.useContext(FormPrefixContext);

export default useFormPrefixProvider;

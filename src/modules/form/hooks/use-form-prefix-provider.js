import React from 'react';
import { FormPrefixContext } from '../contexts/form-prefix-context';

export const useFormPrefixProvider = () => React.useContext(FormPrefixContext);

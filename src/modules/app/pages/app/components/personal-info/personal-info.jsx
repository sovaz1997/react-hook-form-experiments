import { useFormContext } from 'react-hook-form';
import { FormControlLabel } from '@mui/material';
import { FormControls, useFormHelpers } from '../../../../../form';
import { validation } from './validation';
import { ErrorLabels } from './error-labels';

export const PersonalInfo = () => {
  const getFIORules = (labels) => ({
    validate: {
      validation: (v) => validation(v, labels),
    },
    required: {
      value: true,
      message: 'Обязательное поле',
    },
  });

  const { watch } = useFormContext();
  const { getName } = useFormHelpers();
  const hidePatronymic = watch(getName('hidePatronymic'));

  return (
    <>
      <div>
        <FormControls.TextField
          name="firstName"
          label="Имя"
          rules={getFIORules(ErrorLabels.firstName)}
        />
      </div>
      <div>
        <FormControls.TextField
          name="lastName"
          label="Фамилия"
          rules={getFIORules(ErrorLabels.lastName)}
        />
      </div>
      <div>
        <FormControlLabel
          label="Отчество отсутствует"
          control={<FormControls.Checkbox name="hidePatronymic" />}
        />
      </div>
      <div>
        {!hidePatronymic && (
        <FormControls.TextField
          name="patronymic"
          label="Отчество"
          rules={getFIORules(ErrorLabels.patronymic)}
        />
        )}
      </div>
    </>
  );
};

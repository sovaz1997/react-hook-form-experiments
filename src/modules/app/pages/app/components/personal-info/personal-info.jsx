import { useFormContext } from 'react-hook-form';
import { FormControlLabel, Grid } from '@mui/material';
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
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <FormControls.TextField
          name="firstName"
          label="Имя"
          rules={getFIORules(ErrorLabels.firstName)}
          sx={{ width: '100%' }}
        />
      </Grid>
      <Grid item xs={12}>
        <FormControls.TextField
          name="lastName"
          label="Фамилия"
          rules={getFIORules(ErrorLabels.lastName)}
          sx={{ width: '100%' }}
        />
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          label="Отчество отсутствует"
          control={<FormControls.Checkbox name="hidePatronymic" />}
        />
      </Grid>
      <Grid item xs={12}>
        {!hidePatronymic && (
        <FormControls.TextField
          name="patronymic"
          label="Отчество"
          rules={getFIORules(ErrorLabels.patronymic)}
          sx={{ width: '100%' }}
        />
        )}
      </Grid>
    </Grid>
  );
};

import {
  Box, Button, Modal, Typography,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { differenceInCalendarYears } from 'date-fns';
import { FormBlock } from '../../../form';
import { FormProvider } from '../../../form/providers/form-provider';
import { PersonalInfo } from './components/personal-info';
import { DrinksList } from './components/drinks-list';
import { Code } from './components/code';
import * as S from './style';

export const App = () => {
  const form = useForm({
    defaultValues: {
      personalInfo: {
        hidePatronymic: true,
      },
    },
  });

  const [formResult, setFormResult] = useState('');
  const [showModal, setShowModal] = useState(false);

  const onSubmit = (res) => {
    setFormResult(res);
    setShowModal(true);
  };

  const drinkValidate = (v) => v.minAge <= differenceInCalendarYears(new Date(), form.getValues().personalInfo.birthdate);

  return (
    <S.Wrapper>
      <FormProvider {...form}>
        <S.FormBlocks>
          <FormBlock name="personalInfo" title="Персональная информация">
            <PersonalInfo />
          </FormBlock>
          <FormBlock name="cart" title="Корзина">
            <DrinksList name="drinks" drinkValidate={drinkValidate} />
          </FormBlock>
          <Button variant="contained" onClick={form.handleSubmit(onSubmit)}>Отправить</Button>
        </S.FormBlocks>
      </FormProvider>
      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
      >
        <Box sx={S.modalStyle}>
          <Typography variant="h6" component="h2" sx={{ color: 'white' }}>
            Данные отправленной формы
          </Typography>
          <Code value={formResult} />
        </Box>
      </Modal>
    </S.Wrapper>
  );
};

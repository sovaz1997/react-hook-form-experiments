import {
  Box, Button, Modal, styled, Typography,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { FormBlock } from '../../../form';
import { FormProvider } from '../../../form/providers/form-provider';
import { PersonalInfo } from './components/personal-info';
import { DrinksList } from './components/drinks-list';
import { Code } from './components/code';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  borderRadius: '25px',
  backgroundColor: '#004374',
  border: 'none',
  boxShadow: 24,
  p: 4,
};

const FormBlocks = styled('div')`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

const Wrapper = styled('div')`
  margin: 0 auto;
  max-width: 600px;
  padding: 0 10px;
`;

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

  return (
    <Wrapper>
      <FormProvider {...form}>
        <FormBlocks>
          <FormBlock name="personalInfo" title="Персональная информация">
            <PersonalInfo />
          </FormBlock>
          <FormBlock name="cart" title="Корзина">
            <DrinksList name="drinks" />
          </FormBlock>
          <Button variant="contained" onClick={form.handleSubmit(onSubmit)}>Отправить</Button>
        </FormBlocks>
      </FormProvider>
      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
      >
        <Box sx={style}>
          <Typography variant="h6" component="h2" sx={{ color: 'white' }}>
            Данные отправленной формы
          </Typography>
          <Code value={formResult} />
        </Box>
      </Modal>
    </Wrapper>
  );
};

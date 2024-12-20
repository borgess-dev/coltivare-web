import {
  Body1,
  Body1Strong,
  Body2,
  Button,
  Field,
  FieldProps,
  Input,
  Title3,
} from '@fluentui/react-components';
import Logo from '../../core/components/Logo/Logo';
import PasswordInput from './PasswordInput';
import { useForm } from 'react-hook-form';

import '../styles/loginForm.sass';
import { useAuth } from '../state/AuthenticationProvider';
import { LoginRequest } from '../types/LoginRequest';
import { useState } from 'react';

export default function LoginForm() {
  const authentication = useAuth();
  const { register, handleSubmit } = useForm<LoginRequest>();
  const [loginFieldState, setLoginFieldState] = useState<FieldProps>({
    validationState: 'none',
  });
  const [passwordFieldState, setPasswordFieldState] = useState<FieldProps>({
    validationState: 'none',
  });

  const onLoginSubmit = (data: LoginRequest) => {
    if (!data.login && !data.password) {
      setLoginFieldState({ validationState: 'error' });
      setPasswordFieldState({ validationState: 'error' });
      return;
    } else if (!data.login) {
      setLoginFieldState({ validationState: 'error' });
      return;
    } else if (!data.password) {
      setPasswordFieldState({ validationState: 'error' });
      return;
    }

    authentication?.login(data);
  };

  const handleLoginInputFocus = () => {
    setLoginFieldState({ validationState: 'none' });
  };

  const handlePasswordInputFocus = () => {
    setPasswordFieldState({ validationState: 'none' });
  };

  return (
    <form
      className='relative login-form flex flex-col justify-center items-center w-96 p-8 gap-8'
      onSubmit={handleSubmit(onLoginSubmit)}
    >
      <div className='absolute gradient-bg flex justify-center items-center h-44 w-full top-0'></div>

      <div className='flex flex-col justify-center items-center gap-8'>
        <Logo fill='gradient' size='logo64Regular' />
        <div className='flex flex-col justify-center items-center gap-2'>
          <Title3>Olá! Seja Bem-Vindo!</Title3>
          <Body2 align='center'>
            Por favor, insira seus dados para fazer login.
          </Body2>
        </div>
      </div>

      <div className='flex flex-col w-full gap-8'>
        <Field
          validationState={loginFieldState.validationState}
          onFocus={handleLoginInputFocus}
        >
          <Input
            {...register('login')}
            className='w-full'
            placeholder='Nome de Usuário ou E-mail'
            appearance='filled-darker'
            size='large'
          ></Input>
        </Field>
        <PasswordInput
          register={register}
          inputValidationState={passwordFieldState}
          focusHandler={handlePasswordInputFocus}
        ></PasswordInput>
      </div>

      <div className='flex flex-col w-full gap-4'>
        <Button type='submit' appearance='primary' size='large'>
          Entrar
        </Button>
        <Button appearance='secondary' size='large'>
          Esqueci minha Senha
        </Button>
      </div>

      <Body1>
        Ainda não tem uma conta? <Body1Strong>Cadastre-se!</Body1Strong>
      </Body1>
    </form>
  );
}

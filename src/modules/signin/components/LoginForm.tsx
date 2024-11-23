import { Body1, Body1Strong, Body2, Button, Input, Title3 } from "@fluentui/react-components";
import Logo from "../../core/components/Logo";
import PasswordInput from "./PasswordInput";

import '../styles/loginForm.sass';

export default function LoginForm(){

  return (
    <form className='login-form flex flex-col justify-center items-center w-fit p-8 gap-8'>

      <div className='flex flex-col justify-center items-center gap-8'>
        <Logo fill='gradient' size='logo64Regular'/>
        <div className='flex flex-col justify-center items-center gap-2'>
          <Title3>Olá! Seja Bem-Vindo!</Title3>
          <Body2>Por favor, insira seus dados para prosseguir com o login.</Body2>
        </div>
      </div>

      <div className='flex flex-col w-full gap-8'>
        <Input className='w-full' placeholder='Nome de Usuário ou E-mail' appearance='filled-darker' size='large'></Input>
        <PasswordInput></PasswordInput>
      </div>

      <div className='flex flex-col w-full gap-4'>
        <Button appearance='primary' size='large'>Entrar</Button>
        <Button appearance='secondary' size='large'>Esqueci minha Senha</Button>
      </div>
      
      <Body1>Ainda não tem uma conta? <Body1Strong>Cadastre-se!</Body1Strong></Body1>
      
    </form>
  );
}
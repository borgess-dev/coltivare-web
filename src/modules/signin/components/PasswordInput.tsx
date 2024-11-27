import { Input } from "@fluentui/react-components";
import { EyeOffRegular, EyeRegular } from '@fluentui/react-icons';
import { useState } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { LoginRequest } from "../types/LoginRequest";


type InputProps<T extends FieldValues> = {
  register: UseFormRegister<T>;
};


export default function PasswordInput({register}: InputProps<LoginRequest>){

  const [ isPasswordVisible, setPasswordVisible ] = useState(false);

  const handlePasswordVisibility = (): void => {
    if(isPasswordVisible === true){
      setPasswordVisible(false);
      return;
    }

    setPasswordVisible(true);
  };

  if(isPasswordVisible){
    return (
      <Input {...register('password')} className='w-full' placeholder='Senha' appearance='filled-darker' size='large' type='text' contentAfter={<EyeOffRegular onClick={() => handlePasswordVisibility()} />}></Input>
    );
    
  }

  return (
    <Input {...register('password')} className='w-full' placeholder='Senha' appearance='filled-darker' size='large' type='password' contentAfter={<EyeRegular onClick={() => handlePasswordVisibility()} />}></Input>
  );
}
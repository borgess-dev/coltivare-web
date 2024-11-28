import { Field, FieldProps, Input } from "@fluentui/react-components";
import { EyeOffRegular, EyeRegular } from '@fluentui/react-icons';
import { useState } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { LoginRequest } from "../types/LoginRequest";
import React from 'react';


type InputProps<T extends FieldValues> = {
  register: UseFormRegister<T>;
  inputValidationState: FieldProps;
  focusHandler: () => void;
};


export default function PasswordInput({register, inputValidationState, focusHandler}: InputProps<LoginRequest>){

  const [ isPasswordVisible, setPasswordVisible ] = useState(false);

  const handlePasswordVisibility = (): void => {
    if(isPasswordVisible === true){
      console.log(inputValidationState.validationState);
      setPasswordVisible(false);
      return;
    }

    setPasswordVisible(true);
  };

  if(isPasswordVisible){
    return (
      <Field validationState={inputValidationState.validationState} onFocus={focusHandler}>
        <Input {...register('password')} className='w-full' placeholder='Senha' appearance='filled-darker'
          size='large' type='text' contentAfter={<EyeOffRegular onClick={() => handlePasswordVisibility()}/>}></Input>
      </Field>
    );
    
  }

  return (
    <Field validationState={inputValidationState.validationState} onFocus={focusHandler}>
      <Input {...register('password')} className='w-full' placeholder='Senha' appearance='filled-darker'
        size='large' type='password' contentAfter={<EyeRegular onClick={() => handlePasswordVisibility()}/>}></Input>
    </Field>
  );
}
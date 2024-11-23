import { Input } from "@fluentui/react-components";
import { EyeOffRegular, EyeRegular } from '@fluentui/react-icons';
import { useState } from "react";

export default function PasswordInput(){

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
      <Input className='w-full' placeholder='Senha' appearance='filled-darker' size='large' type='text' contentAfter={<EyeOffRegular onClick={() => handlePasswordVisibility()} />}></Input>
    );
    
  }

  return (
    <Input className='w-full' placeholder='Senha' appearance='filled-darker' size='large' type='password' contentAfter={<EyeRegular onClick={() => handlePasswordVisibility()} />}></Input>
  );
}
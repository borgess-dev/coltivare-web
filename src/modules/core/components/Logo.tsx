import gradientLogotype from "../../../assets/Logotype-gradient.svg";
import solidLogotype from "../../../assets/Logotype-solid.svg";
import { LogoPropTypes } from "../types/LogoPropTypes";

export default function Logo({ fill, size }: LogoPropTypes){

  const sizes = {
    logo16Regular: 16,
    logo20Regular: 20,
    logo24Regular: 24,
    logo28Regular: 28,
    logo32Regular: 32,
    logo36Regular: 36,
    logo40Regular: 40,
    logo44Regular: 44,
    logo48Regular: 48,
    logo64Regular: 64,
  };

  if(fill === 'gradient'){
    return (
      <img src={gradientLogotype} width={sizes[size]}></img>
    );
  }

  return (
    <img src={solidLogotype} width={sizes[size]}></img>
  );
}
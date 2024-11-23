import { Caption1 } from "@fluentui/react-components";
import LoginForm from "../components/LoginForm";

import '../styles/screen.sass';

export default function Login(){
  return (
    <div className="login-screen p-4 h-screen">
      <main className="flex flex-col justify-center items-center">
        <LoginForm/>
      </main>
      <footer className="flex justify-center items-center p-8">
        <Caption1>©2024, Coltivare</Caption1>
      </footer>
    </div>
  );
}
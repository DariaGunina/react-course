import { signInWithEmailAndPassword } from "firebase/auth";
import { AuthForm } from "../features/AuthForm";

export const LoginPage = () => 
  <AuthForm 
    addData={signInWithEmailAndPassword}
    title="Login page"
  />;
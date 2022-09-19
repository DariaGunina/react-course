import { signInWithEmailAndPassword } from "firebase/auth";
import { AuthForm } from "../features/Forms";

export const LoginPage = () => 
  <AuthForm 
    addData={signInWithEmailAndPassword}
    title="Login page"
  />;
import { createUserWithEmailAndPassword } from "firebase/auth";
import { AuthForm } from "../features/AuthForm";

export const SignUpPage = () => 
  <AuthForm 
    addData={createUserWithEmailAndPassword}
    title="Signup page"
  />
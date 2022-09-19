import { createUserWithEmailAndPassword } from "firebase/auth";
import { AuthForm } from "../features/Forms";

export const SignUpPage = () => 
  <AuthForm 
    addData={createUserWithEmailAndPassword}
    title="Signup page"
  />
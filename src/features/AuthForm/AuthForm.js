import { useState } from "react";
import PropTypes from "prop-types";
import { auth } from "../../api/firebase";

import {  
    Container, 
    Title,
    Input,
    Button
  } from "./styles";

export const AuthForm = ({ addData, title}) => {
  const [form, setForm] = useState({ email: "", password: "" });

  const onSubmit = (form) => {
    return addData(auth, form.email, form.password);
  };

  const handleChangeForm = (e) => {
    const field = e.target.getAttribute("data-name");

    setForm({
      ...form,
      [field]: e.target.value,
    });
  };

  return (
    <Container>
      <Title>{title}</Title>
      <Input
        placeholder="email"
        value={form.email}
        data-name="email"
        onChange={handleChangeForm}
      />
      <Input
        placeholder="password"
        value={form.password}
        data-name="password"
        onChange={handleChangeForm}
      />
      <Button
        onClick={() => {
          onSubmit(form);
        }}
      >
        Click
      </Button>
    </Container>
  );
};


AuthForm.propTypes = {
  addData: PropTypes.func.isRequired,
  title: PropTypes.func.isRequired,
};
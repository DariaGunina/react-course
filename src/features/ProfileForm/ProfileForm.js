import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProfile } from "../../store/profile";

import { Title, Input, Button} from "./styles";

export const ProfileForm = ({ firstName, lastName, phone }) => {
  const [form, setForm] = useState({ firstName, lastName, phone });

  const dispatch = useDispatch();

  const handleChangeForm = (e) => {
    const field = e.target.getAttribute("data-name");

    setForm({
      ...form,
      [field]: e.target.value,
    });
  };

  return (
    <>
      <Title>Profile form</Title>
      <div>
        <Input
          value={form.firstName}
          placeholder="FirstName"
          data-name="firstName"
          onChange={handleChangeForm}
        />
        <Input
          value={form.lastName}
          placeholder="LastName"
          data-name="lastName"
          onChange={handleChangeForm}
        />
        <Input
          value={form.phone}
          placeholder="Phone"
          data-name="phone"
          onChange={handleChangeForm}
        />

        <Button onClick={() => dispatch(updateProfile(form))}>Save</Button>
      </div>
    </>
  );
};